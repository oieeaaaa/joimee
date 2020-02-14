import React, { useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import navList from './navList';

const Header = ({ router, scrollOffset }) => {
  const header = useRef(null);

  useEffect(() => {
    if (!header) return false;
    const { current: h } = header;
    let prevScroll = 0;

    const handleScroll = throttle(() => {
      const { scrollY } = window;

      if (scrollY < 0) return;
      // with offset check if scrolled
      if (scrollY > scrollOffset) {
        h.classList.add('scrolled');
      } else {
        h.classList.remove('scrolled');
      }

      // check scroll direction
      if (prevScroll < scrollY) {
        h.classList.add('hidden');
      } else {
        h.classList.remove('hidden');
      }

      prevScroll = window.scrollY;
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, [header]);

  function renderLinks(links) {
    const [, currentRoute] = router.pathname.split('/'); // get the base path

    return links.map(({ path, name }) => {
      let className = 'header-nav__link';

      // root beutification
      if (path === '/') {
        className += ' header-nav__link--center';
      }

      // show active route
      if (path === `/${currentRoute}`) {
        className += ' active';
      }

      return (
        <Link key={path} href={path}>
          <a className={className}>{name}</a>
        </Link>
      );
    });
  }

  return (
    <header ref={header} className="header">
      <div className="grid">
        <nav className="header-nav">
          {renderLinks(navList)}
        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  scrollOffset: 50,
};

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  scrollOffset: PropTypes.number,
};

export default withRouter(Header);
