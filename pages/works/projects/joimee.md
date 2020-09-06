import Project from 'components/Project/project';

export const meta = {
  title: 'Joimee',
  summary: 'Joimee Tan Cajandab\'\s Website: Build from scratch 🤓',
  published: true,
  publishedAt: '2020-03-19',
  image: '/images/joimee.png',
  color: '#ff5555',
};

export default ({ children }) => <Project meta={meta}>{children}</Project>

## Tech Stack

Here is the list of the core technologies used on this project:

1. [NextJS](https://nextjs.org/)
2. [ReactJS](https://reactjs.org/)
3. [MDX](https://mdxjs.com/)

## In the beginning, there was a thought
Been developing for a while now and I still haven't build my own website until now.
What was stopping me before is that I always wanted it to be "perfect" but having realized
that there is no such thing as that I immediately open up my browser and searched for [figma](http://figma.com/)
and did some wireframes there to conceptualized my ideal website.

## Be S.A.D
1. **Simple**
2. **Accessible**
3. **Dynamic**

## During the process
There were a lot of iterations I have to go through merely to achieve the
feeling of satisfaction. At first I've tried to use some CMS such as
contentful and graphcms to manage all of the posts content and site's assets.
But I ended up using neither of them and go native instead.

## Going native
Here is the thing I didn't know I didn't know before.

### Pre-evaluation with Babel
I've used
[babel-plugin-preval](https://github.com/kentcdodds/babel-plugin-preval) and
[babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) by
Kent C. Dodds to pre-evaluate my node scripts here is a sample snippet from the source
code below:

```javascript
// getMarkdowns.js
const fs = require('fs');
const path = require('path');

function getMarkdowns(from, linkPath) {
  const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
  const DIR = path.join(process.cwd(), from);
  const files = fs.readdirSync(DIR);

  const markdowns = files.map(file => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, 'utf8');
    const match = META.exec(contents);
    if (!match || typeof match[1] !== 'string') {
      throw new Error(`${name} needs to export const meta = {}`);
    }

    const meta = eval('(' + match[1] + ')'); // eslint-disable-line

    return {
      ...meta,
      path: `/${linkPath}/${file.replace(/\.mdx?$/, '')}`,
    };
  }).filter(meta => meta.published).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return markdowns;
}

module.exports = getMarkdowns;


// posts.js
import preval from 'babel-plugin-preval/macro';

const from = './pages/works/posts';
const linkPath = 'works/posts';

module.exports = preval`
  module.exports = require('./getMarkdowns')("${from}", "${linkPath}");
`;
```

Woah!, Yea I know this is a bit too much to take but do you see the `preval`
function below under **posts.js**? this is the magic that make my life so much
easier. Because the problem here is that I need to dynamically get a list of
all **.md** files from my file system using nodejs and display it on the client
side or front-end. Anyways I'm making this project open source so you
can check it out on [github](https://github.com/oieeaaaa/joimee) and please do not
hesitate to tell me if you have found a problem. I'm very open
for your feedback I found it so helpful to improve my works.


## Takeaways
You don't need your site to be perfect. Just go on and start with your most simple idea
and refine it as you go component per component.

Last takeaway I would like to share is that iteration are good only if you have
enough time. This can help you decide which tools is the most suitable for the project
that you're building. And lastly remember to **ENJOY**.


Thanks!!!
