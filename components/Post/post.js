import Head from 'next/head';
import Layout from 'components/Layout/layout';
import GoBack from 'components/GoBack/goBack';
import parseDate from 'js/utils/parseDate';

const Post = ({ meta, children }) => (
  <Layout title={meta.title}>
    <div className="post">
      <Head>
        <meta name="title" content={meta.title} />
        <meta name="description" key="description" content={meta.summary} />
      </Head>
      <div className="post-header">
        <GoBack />
        <h1 className="post__title">{meta.title}</h1>
        <p>{parseDate(meta.publishedAt)}</p>
      </div>
      <article className="post-content">
        {children}
      </article>
      <div className="post-footer">
        <GoBack />
      </div>
    </div>
  </Layout>
);

export default Post;
