// @preval
const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), './pages/works/posts');
const files = fs.readdirSync(DIR);

const blogPosts = files.map(file => {
  const name = path.join(DIR, file);
  const contents = fs.readFileSync(name, 'utf8');
  const match = META.exec(contents);
  if (!match || typeof match[1] !== 'string') {
    throw new Error(`${name} needs to export const meta = {}`);
  }

  const meta = eval('(' + match[1] + ')'); // eslint-disable-line

  return {
    ...meta,
    path: `/works/posts/${file.replace(/\.mdx?$/, '')}`,
  };
}).filter(meta => meta.published).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

module.exports = blogPosts;
