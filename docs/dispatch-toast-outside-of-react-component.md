---
id: 'dispatch-toast-outside-of-react-component'
title: 'Dispatch toast outside of react component'
sidebar_label: 'Dispatch toast outside of react component'
---

The `toast` emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere.

In the video below I've used it inside the service worker to notify the user that he's offline.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Z9DLrRu4sYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from 'src/components/App';
import { toast } from "react-toastify";
import registerServiceWorker from './registerServiceWorker';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
registerServiceWorker(toast);



//registerServiceWorker.js

// this is a classic service worker coming from CRA

export default function register(toast) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) return;

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      let isAppOnline = navigator.onLine;

      window.addEventListener('online', () => {
        if(!isAppOnline){
          toast('🦄 The connectivity is back, sync in progress...');
          isAppOnline = true;
        }
      });

      window.addEventListener('offline', () => {
        toast.warn('The app is running offline, any changes mades during this time will be synced as soon as the connectivity is back');
        isAppOnline = false;
      });

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, toast);
      } else {
        registerValidSW(swUrl, toast);
      }
    });
  }
}

function registerValidSW(swUrl, toast) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              toast.info('🔄 New content is available; please refresh.')
            } else {
              toast('🚀 Content is cached for offline use.')
            }
          }
        };
      };
    })
    .catch(error => {
      toast.error('Error during service worker registration: ' + error,);
    });
}

function checkValidServiceWorker(swUrl, toast) {
  fetch(swUrl)
    .then(response => {
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      toast(
        '💩 No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

```