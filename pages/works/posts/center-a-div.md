import Post from 'components/Post/post';

export const meta = {
  title: 'Center a div',
  summary: "Simple isn't it?",
  published: true,
  publishedAt: '2020-04-17',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Your markup

```html
  <div class="box">
    <div class="box__item"></div>
  </div>
```

Your style

```css
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box__item {
    width: 150px;
    height: 150px;
    background-color: papayawhip;
  }
```

Simple isn't it?
