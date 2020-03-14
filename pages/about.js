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
        <div key={src} className={imageClass}>
          <img src={src} alt={alt} />
        </div>
      );
    })
  );

  return (
    <Layout title="About" description="Information about Joimee T. Cajandab">
      <div className="about">
        <div className="grid">
          <h1 className="about__title">Joimee Tan Cajandab</h1>
          <div className="about__content">
            <p className="about__text">
              Hi there, My name is Joimee and I do web stuff you can check out my projects&nbsp;
              <Link href="/works">
                <a className="about__link">here</a>
              </Link>
              .
            </p>
            <p className="about__text">
              I&apos;m young and I&apos;m single.
              <br />
              I&apos;m also interested in writing.
              <br />
              I enjoy having a conversation with friends.
              <br />
              I can play the river flows with my guitar.
              <br />
              I can be a friend if you need one.
              <br />
            </p>
            <p className="about__text">
              Need to talk? You can send me an&nbsp;
              <a className="about__link" href="mailto:joimee.cajandab@gmail.com">email</a>
              .
              <br />
            </p>
            <p className="about__text">
              Thanks for checking out my site 😉.
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
