import Post from 'components/Post/post';

export const meta = {
  title: 'Truncate Text',
  summary: 'This is a test',
  published: true,
  publishedAt: '2020-04-25',
};

export default ({ children }) => (
  <Post meta={meta}>
    {children}
  </Post>
);

This is the beginning of my first **Practical CSS** series.

# Demo
```js codesandbox=nnrih
```

```js codesandbox=mqpp1d4r0
```
