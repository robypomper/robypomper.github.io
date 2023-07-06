// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RobyPomper.org',
  tagline: 'Roberto Pompermaier\'s personal web site',
  favicon: 'img/logo_32.ico',
  url: 'https://www.robypomper.org',
  baseUrl: '/',
  organizationName: 'robypomper',
  projectName: 'robypomper.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'sections',
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/robypomper/robypomper.github.io/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/robypomper/robypomper.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/robypomper-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'RobyPomper Logo',
          src: 'img/logo_200.png',
        },
        items: [
          {
            label: 'Sections',
            type: 'docSidebar',
            sidebarId: 'sectionsSidebar',
            position: 'left',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },
          {
            href: 'https://www.johnosproject.org',
            label: 'John OS',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'RobyPomper.org',
            items: [
              {
                label: 'My Presentation',
                to: '/docs/intro',
              },
              {
                label: 'My Projects',
                to: '/docs/category/my-projects',
              },
              {
                label: 'My Sports',
                to: '/docs/category/my-sports',
              },
              {
                label: 'My Photos',
                to: '/docs/photos',
              },
              {
                label: 'My Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Other WebSites',
            items: [
              {
                label: 'John OS Project',
                href: 'https://www.johnosproject.org',
              },
              {
                label: 'SmartVan',
                href: 'https://smartvan.johnosproject.org',
              },
              {
                label: 'Smart Aladino',
                href: 'https://smartaladino.johnosproject.org',
              },
              {
                label: 'Utils Libs',
                href: 'https://utils_libs.robypomper.org',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/roberto-pompermaier-474a4132/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/robypomper',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roberto Pompermaier`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      announcementBar: {
        id: 'under_maintenance_1',
        content: 'Hi, <b>I\'m updating this web site.</b> Please, come back soon to see the news!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;
