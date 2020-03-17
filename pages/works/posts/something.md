import Post from 'components/Post/post';

export const meta = {
  title: 'Something',
  summary: 'Something',
  published: true,
  publishedAt: '2020-02-02',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

# Something

something something
