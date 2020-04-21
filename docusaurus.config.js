module.exports = {
  title: "React-Toastify",
  tagline: "React notification made easy !",
  url: "https://fkhadra.github.io/",
  baseUrl: "/react-toastify/",
  favicon: "img/favicon.ico",
  organizationName: "fkhadra", 
  projectName: "react-toastify", 
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "React-Toastify",
      links: [
        {
          to: 'https://github.com/fkhadra/react-toastify',
          label: 'GitHub',
          position: 'right', 
        }
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Fadi Khadra`,
    },
  },
  stylesheets: [
      "/static/ReactToastify.min.css"
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/fkhadra/react-toastify-doc/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
