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
    announcementBar: {
      id: 'feedback', // Any value that will identify this message
      content: 'Hey any feedback regarding the v6 or the new doc ? please comment <a target="_blank" rel="noopener noreferrer" href="https://github.com/fkhadra/react-toastify/issues/459">this issue</a>',
      
    }

  },
  stylesheets: [
      "/ReactToastify.min.css"
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
