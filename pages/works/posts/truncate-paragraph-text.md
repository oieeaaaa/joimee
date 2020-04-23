import Post from 'components/Post/post';

export const meta = {
  title: 'Truncate paragraph text',
  summary: '',
  published: true,
  publishedAt: '2020-01-23',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Paragraph
