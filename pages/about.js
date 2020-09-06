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
              Hi there 🎉, My name is Joimee and I do web and mobile stuff you
              can check some of my projects&nbsp;
              <Link href="/works">
                <a className="about__link">here</a>
              </Link>
              .
            </p>
            <p className="about__text">
              I&apos;m very passionate in learning ❤️. My interests are coding,
              writing, and reading books.
            </p>
            <p className="about__text">
              If you need some help on your website, or just saying hi. You&apos;re free to
              send me an&nbsp;
              <a
                className="about__link"
                href="mailto:joimee.cajandab@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
              &nbsp;or you can message me thru&nbsp;
              <a
                className="about__link"
                href="https://www.facebook.com/joimee.cajandab.921"
                target="_blank"
                rel="noreferrer"
              >
                messenger
              </a>
            </p>
            <p className="about__text">
              And if I am not around I&apos;m probably strumming my acoustic guitar
              or reading a book 🤓 while taking a break.
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
