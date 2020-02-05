import React from 'react';
import Link from 'next/link';
import Text3D from 'components/Text3D/text3D';

const Hero = () => (
  <section className="hero">
    <div className="grid">
      <img className="hero__bg" src="/images/hero-bg.svg" alt="hero-bg.svg" />
      <Link href="/about">
        <a className="hero__title">
          <Text3D className="hero__title-text" text="oiee" />
          <Text3D className="hero__title-text" text="aaaa" />
        </a>
      </Link>
    </div>
  </section>
);

export default Hero;
