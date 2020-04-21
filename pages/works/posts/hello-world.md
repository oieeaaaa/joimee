import Post from 'components/Post/post';

export const meta = {
  title: 'Hello World',
  summary: 'Hello World',
  published: true,
  publishedAt: '2020-01-01',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Hello World.
