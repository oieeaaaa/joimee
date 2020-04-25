const withPlugins = require('next-compose-plugins');
const codesandbox = require('remark-codesandbox');
const sass = require('@zeit/next-sass');
const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[codesandbox, {
      mode: 'iframe',
    }]],
    rehypePlugins: [],
  },
});

module.exports = withPlugins([
  [sass],
  [mdx, {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  }],
]);
