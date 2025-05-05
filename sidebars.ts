const sidebars = {
  someSidebar: [
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      items: [
        "introduction",
        "installation",
        "migration-v11",
        "migration-v10",
        "migration-v9",
        "migration-v8",
        "release-notes",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
      },
      items: [
        "use-your-own-component",
        "how-to-style",
        "positioning-toast",
        "autoClose",
        "remove-toast",
        "promise",
        "define-callback",
        "icons",
        "replace-default-transition",
        "custom-animation",
        "use-a-custom-id",
        "accessibility",
        "ssr",
        "pause-on-focus-loss",
        "prevent-duplicate",
        "delay-toast-appearance",
        "limit-the-number-of-toast-displayed",
        "use-a-controlled-progress-bar",
        "update-toast",
        "listen-for-changes",
        "use-a-custom-close-button-or-remove-it",
        "add-an-undo-action-to-a-toast",
        "use-react-toastify-with-redux",
        "drag-to-remove",
        "enable-right-to-left-support",
        "dispatch-toast-outside-of-react-component",
        "timer",
        "stacked",
        "multi-containers",
      ],
    },
    {
      type: "link",
      label: "Examples",
      href: "https://stackblitz.com/@fkhadra/collections/react-toastify",
    },
    {
      type: "category",
      label: "Addons",
      link: {
        type: "generated-index",
      },
      items: ["addons/use-notification-center"],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
      },
      items: [
        "api/toast-container",
        "api/toast",
        "api/css-transition",
        "api/collapse-toast",
      ],
    },
  ],
};

export default sidebars;
