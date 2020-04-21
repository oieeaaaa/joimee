import Head from 'next/head';
import Layout from 'components/Layout/layout';
import Markdown from 'components/Markdown/markdown';
import GoBack from 'components/GoBack/goBack';
import parseDate from 'js/utils/parseDate';

const Project = ({ meta, children }) => (
  <Layout title={meta.title}>
    <Markdown>
      <Head>
        <meta name="title" content={meta.title} />
        <meta name="description" key="description" content={meta.summary} />
      </Head>
      <figure className="markdown-hero">
        <img className="markdown-hero__img" src={meta.image} alt={meta.title} />
      </figure>
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

export default Project;
