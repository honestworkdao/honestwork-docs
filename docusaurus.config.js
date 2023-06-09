// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Honestwork',
  tagline: 'Web3 Freelancer Platform',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.honestwork.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/honestworkdao/honestwork-docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'CLPBWKEI7P',
        apiKey: '5d20fa5c5cd17d0d9142ba333f5a04dd',
        indexName: 'honestwork',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchPagePath: 'search',
      },
      image: 'img/social.png',
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'HonestWork',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'User Documentation',
          },
          {
            href: 'https://github.com/honestworkdao',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'HonestWorkDAO',
            items: [
              {
                label: 'User Documentation',
                to: '/',
              },
              {
                label: 'Application',
                to: 'https://honestwork.app',
              },
              {
                label: 'Blog',
                to: 'https://medium.com/@honestworkdao',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vP6R5unDBF',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/honestworkdao',
              },
              {
                label: 'Reddit',
                href: 'https://discord.gg/vP6R5unDBF',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'Frontend',
                href: 'https://github.com/honestworkdao/honestwork-app',
              },
              {
                label: 'API',
                href: 'https://github.com/honestworkdao/honestwork-api',
              },
              {
                label: 'Contracts',
                href: 'https://github.com/honestworkdao/honestwork-contracts',
              },
              {
                label: 'Docs',
                href: 'https://github.com/honestworkdao/honestwork-docs',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} HonestWorkDAO`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
