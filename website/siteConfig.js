/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'TurtleCoin Wiki', // Title for your website.
  tagline: 'Documentation for all things TurtleCoin',
  url: 'https://sajo8.github.io', // Your website URL
  baseUrl: '/turtlecoin-docs/', // Base URL for your project 
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'turtlecoin-docs',
  organizationName: 'turtlecoin',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Getting-Started', label: 'Intro'},
    {doc: 'guides/Using-trtlbot-plus-plus', label: 'Guides'},
    {doc: 'developer/Resources', label: 'For Developers'},
    {href: 'http://chat.turtlecoin.lol', label: 'Help'},
    {href: 'https://github.com/turtlecoin/turtlecoin-docs', label: 'GitHub'},
    { search: true }
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/fav.png',
  favicon: 'img/fav.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00853D',
    secondaryColor: '#212721',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "Monsterrat"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // Links are rendered directly in Footer.js
  copyright1: `Copyright © ${new Date().getFullYear()} TurtleCoin`,
  copyright2: `Docs released under the`,
  copyright3: `TurtleCoin released under the`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  docsSideNavCollapsible: true,
  cname: 'docs.turtlecoin.lol',
  docsUrl: '',
  scrollToTop: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
