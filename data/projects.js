import preval from 'babel-plugin-preval/macro';

const from = './pages/works/projects';
const linkPath = 'works/projects';

module.exports = preval`
  module.exports = require('./getMarkdowns')("${from}", "${linkPath}");
`;
