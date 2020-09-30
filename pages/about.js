/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react';
import Link from 'next/link';
import Layout from 'components/Layout/layout';
import ImgLazy from 'components/ImgLazy/imgLazy';
import gallery from 'data/gallery';

const About = () => {
  const renderImage = images => (
    images.map(image => {
      const {
        src, alt, width, height,
      } = image;
      let imageClass = 'about__gallery-image';

      if (height > width) {
        imageClass += ' about__gallery-image--portrait';
      }

      return (
        <ImgLazy key={src} src={src} className={imageClass} alt={alt} />
      );
    })
  );

  return (
    <Layout title="About" description="Information about Joimee T. Cajandab">
      <div className="about">
        <div className="grid">
          <h1 className="about__title">About me</h1>
          <div className="about__content">
            <p className="about__text">
              I build Mobile & Web infromation systems.
            </p>
            <p className="about__text">
              I&apos;m very passionate in learning new things. My interests are
              coding, writing, and reading books.
            </p>
            <p className="about__text">
              If you don&apos;t want to deal with technical stuff. Please
              don&apos;t hesitate to send me an&nbsp;
              <a
                className="about__link"
                href="mailto:joimee.cajandab@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
              &nbsp;or message me through&nbsp;
              <a
                className="about__link"
                href="https://www.facebook.com/joimee.cajandab.921"
                target="_blank"
                rel="noreferrer"
              >
                messenger
              </a>
              .
            </p>
          </div>
        </div>
        <div className="about__gallery">
          {renderImage(gallery)}
        </div>
      </div>
    </Layout>
  );
};

export default About;
