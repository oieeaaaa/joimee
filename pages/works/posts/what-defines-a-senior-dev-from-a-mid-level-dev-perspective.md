import Post from 'components/Post/post';

export const meta = {
  title: 'What defines a Senior Dev from a Mid-Level Dev perspective?',
  summary: "It's not just about the technical skills that Senior Devs have...",
  published: false,
  publishedAt: '2020-10-26',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Something something
