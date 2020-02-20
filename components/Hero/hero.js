import React from 'react';
import Link from 'next/link';
import Text3D from 'components/Text3D/text3D';

const Hero = () => (
  <section className="hero">
    <div className="grid">
      <Link href="/about">
        <a className="hero__title">
          <Text3D className="hero__title-text" text="oiee" />
          <Text3D className="hero__title-text" text="aaaa" />
        </a>
      </Link>
      <nav className="hero__nav">
        <Link href="/works">
          <a className="hero__nav-item">
            Works
          </a>
        </Link>
        <Link href="/works">
          <a className="hero__nav-item">
            About
          </a>
        </Link>
      </nav>
    </div>
  </section>
);

export default Hero;
