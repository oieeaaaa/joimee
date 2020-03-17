import Head from 'next/head';
import Layout from 'components/Layout/layout';
import GoBack from 'components/GoBack/goBack';
import parseDate from 'js/utils/parseDate';

const Project = ({ meta, children }) => (
  <Layout title={meta.title}>
    <div className="project">
      <Head>
        <meta name="title" content={meta.title} />
        <meta name="description" key="description" content={meta.summary} />
      </Head>
      <figure className="project-hero">
        <img className="project-hero__img" src={meta.image} alt={meta.title} />
      </figure>
      <div className="project-header">
        <GoBack />
        <h1 className="project__title">{meta.title}</h1>
        <p>{parseDate(meta.publishedAt)}</p>
      </div>
      <article className="project-content">
        {children}
      </article>
      <div className="project-footer">
        <GoBack />
      </div>
    </div>
  </Layout>
);

export default Project;

