import Post from 'components/Post/post';

export const meta = {
  title: 'Practical CSS Series: Part 2',
  summary: 'Morphing',
  published: true,
  publishedAt: '2020-04-30',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

## Morphing

#### TLDR;
- Key property `clip-path`
- The _vertices_ for each frame must be equal
- [Demo](https://codesandbox.io/s/morphing-he5mo?file=/index.html)

#### Markup
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Morphing</title>
  </head>
  <body>
    <div class="morphing morph"></div>
  </body>
</html>
```

#### Styles
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.morphing {
  width: 25rem;
  height: 25rem;
  background-color: #ff5555;
  transition: clip-path 1s ease;
}

.morph {
  animation: 3s morph ease infinite alternate;
}

@keyframes morph {
  0% {
    clip-path: polygon(50% 0%, 70% 30%, 100% 70%, 50% 70%, 0% 70%, 30% 30%);
  }

  15% {
    clip-path: polygon(50% 0%, 70% 30%, 100% 70%, 50% 70%, 0% 70%, 30% 30%);
    background-color: papayawhip;
  }

  25% {
    clip-path: polygon(50% 0%, 50% 0, 100% 50%, 50% 100%, 0 50%, 50% 0);
    background-color: paleturquoise;
  }

  50% {
    clip-path: polygon(50% 0%, 80% 0, 100% 60%, 50% 100%, 0 60%, 20% 0);
    background-color: palevioletred;
  }

  100% {
    clip-path: polygon(50% 0, 90% 30%, 90% 70%, 51% 100%, 10% 70%, 10% 30%);
    background-color: tomato;
  }
}
```
