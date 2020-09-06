import Layout from 'components/Layout/layout';
import Markdown from 'components/Markdown/markdown';
import GoBack from 'components/GoBack/goBack';
import parseDate from 'js/utils/parseDate';

const Post = ({ meta, children }) => (
  <Layout title={meta.title} description={meta.summary}>
    <Markdown>
      <div className="markdown-header">
        <GoBack />
        <h1 className="markdown__title">{meta.title}</h1>
        <p className="markdown__date">{parseDate(meta.publishedAt)}</p>
      </div>
      <article className="markdown-content">
        {children}
      </article>
      <div className="markdown-footer">
        <GoBack />
      </div>
    </Markdown>
  </Layout>
);

export default Post;
