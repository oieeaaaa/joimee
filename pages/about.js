import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from 'components/Layout/layout';
import ImgLazy from 'components/ImgLazy/imgLazy';
import gallery from 'data/gallery';

const About = () => {
  const renderImage = gallery => (
    gallery.map(image => {
      const { src, alt, width, height } = image;
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
              Hi there, My name is Joimee and I do web stuff you can check some of my projects&nbsp;
              <Link href="/works">
                <a className="about__link">here</a>
              </Link>
              .
            </p>
            <p className="about__text">
              I&apos;m young and very passionate in learning. I don't have so much to do
              with my life other than coding, making designs, and reading books
              </p>
            <p className="about__text">
              I've also fallen in love with writing
              <br />
              I love solving problems and learning new concepts
            </p>
            <p className="about__text">
              And if I am not around I'm probably playing a song with my guitar or reading some non-fiction book
            </p>
            <p className="about__text">
              Need to talk? You can send me an&nbsp;
              <a className="about__link" href="mailto:joimee.cajandab@gmail.com">email</a>
              .
              <br />
            </p>
            <p className="about__text">
              Thanks!
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
