import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  someSidebar: {
    ["Getting Started"]: [
      "introduction",
      "installation",
      "migration-v10",
      "migration-v9",
      "migration-v8",
      "release-notes",
    ],
    Usage: [
      "positioning-toast",
      "autoClose",
      "render-what-you-want",
      "remove-toast",
      "promise",
      "icons",
      "pause-on-focus-loss",
      "use-a-custom-id",
      "prevent-duplicate",
      "delay-toast-appearance",
      "limit-the-number-of-toast-displayed",
      "use-a-controlled-progress-bar",
      "update-toast",
      "define-callback",
      "listen-for-changes",
      "use-a-custom-close-button-or-remove-it",
      "add-an-undo-action-to-a-toast",
      "use-react-toastify-with-redux",
      "replace-default-transition",
      "custom-animation",
      "drag-to-remove",
      "enable-right-to-left-support",
      "accessibility",
      "multi-containers",
      "how-to-style",
      "dispatch-toast-outside-of-react-component",
    ],
    Addons: ["addons/use-notification-center"],
    ["API Reference"]: [
      "api/toast-container",
      "api/toast",
      "api/css-transition",
      "api/collapse-toast",
      "api/use-toast-container",
      "api/use-toast",
    ],
  },
};

export default sidebars;
