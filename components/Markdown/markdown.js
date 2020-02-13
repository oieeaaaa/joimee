/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ImgLazy from 'components/ImgLazy/imgLazy';

const Markdown = ({ content }) => {
  const renderers = {
    paragraph: ({ children }) => <p className="md__p">{children}</p>,
    heading: ({ level, children }) => {
      const CustomHeading = `h${level}`;
      const headingClassName = `md__heading md__heading--${level}`;
      return <CustomHeading className={headingClassName}>{children}</CustomHeading>;
    },
    image: ({ alt, src }) => <ImgLazy className="md__img" alt={alt} src={src} />,
  };

  return (
    <article className="md">
      <ReactMarkdown renderers={renderers} source={content} />
    </article>
  );
};

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
