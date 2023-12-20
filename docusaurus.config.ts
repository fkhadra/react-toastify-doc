import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React-Toastify",
  tagline: "React notification made easy !",
  url: "https://fkhadra.github.io/",

  baseUrl: "/react-toastify/",
  favicon: "img/favicon.ico",
  organizationName: "fkhadra",
  projectName: "react-toastify",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    navbar: {
      title: "React-Toastify",
      items: [
        {
          to: "https://github.com/fkhadra/react-toastify",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Fadi Khadra`,
    },
    announcementBar: {
      id: "sponsor", // Any value that will identify this message
      content:
        'Hey you like my work? Consider <a target="_blank" rel="noopener noreferrer" href="https://voices.org.ua/en/donat/">helping Ukraine 🇺🇦</a>',
    },
    algolia: {
      appId: "XKWJI2MIYA",
      apiKey: "d6103ea15850ba5ac898d24750de42b8",
      indexName: "react-toastify",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/fkhadra/react-toastify-doc/edit/master/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};

export default config;
