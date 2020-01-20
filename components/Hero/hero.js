import React from 'react';
import Link from 'next/link';

const Hero = () => (
  <section className="hero">
    <div className="grid">
      <img className="hero__bg" src="/icons/hero-bg.svg" alt="Joimee Tan Cajandab" />
      <Link href="/about">
        <a className="hero__title">
          <span className="hero__title-text" title="oiee">OIEE</span>
          <span className="hero__title-text" title="aaaa">AAAA</span>
        </a>
      </Link>
    </div>
  </section>
);

export default Hero;
