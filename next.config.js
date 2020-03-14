const sass = require('@zeit/next-sass');
const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [sass],
  [mdx, {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  }],
]);
