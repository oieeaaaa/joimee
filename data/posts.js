import preval from 'babel-plugin-preval/macro';

const from = './pages/works/posts';
const linkPath = 'works/posts';

module.exports = preval`
  module.exports = require('./getMarkdowns')("${from}", "${linkPath}");
`;
