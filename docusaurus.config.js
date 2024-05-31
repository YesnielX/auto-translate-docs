// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Auto Translate Docs",
  tagline: "Auto Translate | Discord Bot",
  url: "https://yesnielx.github.io",
  baseUrl: "/auto-translate-docs/",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "YesnielX", // Usually your GitHub org/user name.
  projectName: "auto-translate-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Auto Translate Docs",
        logo: {
          alt: "Auto Translate Logo",
          src: "img/auto_translate.gif",
          style: {
            borderRadius: "5px",
            height: "120%",
            marginTop: "-5px"
          }
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Home",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/terms", label: "Terms of service", position: "left" },
          {
            to: "/privacy",
            label: "Privacy policy",
            position: "left",
          },
          {
            label: "Support",
            href: "https://discord.gg/paw3uX6zaC",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Welcome",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/paw3uX6zaC",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Terms of Service",
                to: "/terms",
              },
              {
                label: "Top.gg",
                href: "https://top.gg/bot/1015994372908654713",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Auto Translate by YesnielX, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
