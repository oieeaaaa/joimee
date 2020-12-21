import React from 'react';
import Layout from 'components/Layout/layout';
import ImgLazy from 'components/ImgLazy/imgLazy';
import gallery from 'data/gallery';

const About = () => {
  const renderImage = images => (
    images.map(({
      src,
      alt,
      width,
      height,
    }) => {
      const isPortrait = height > width;
      const imgBaseSize = 300;
      const imgHeight = isPortrait ? imgBaseSize * 2 : imgBaseSize;
      let imageClass = 'about__gallery-image';

      if (isPortrait) {
        imageClass += ' about__gallery-image--portrait';
      }

      return (
        <ImgLazy
          key={src}
          src={src}
          className={imageClass}
          alt={alt}
          width={imgBaseSize}
          height={imgHeight}
          objectFit="cover"
        />
      );
    })
  );

  return (
    <Layout title="About" description="Who is Joimee T. Cajandab?">
      <div className="about">
        <div className="grid">
          <h1 className="about__title">About me</h1>
          <div className="about__content">
            <p className="about__text">
              I love what I do!
            </p>
            <p className="about__text">
              I&apos;m very passionate in learning and exploring new things.
            </p>
            <p className="about__text">
              Most of the time I choose to live a solitary life. This keeps me away from
              any kinds of distraction and allow me to focus on the things that
              I love. But don&apos;t get me wrong I love being around other people (some people).
            </p>
            <p className="about__text">
              Here are some silly pictures of Me, My friends, and Family below:
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
