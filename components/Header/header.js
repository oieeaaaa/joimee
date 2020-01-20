import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import navList from './navList';

const Header = ({ router, scrollOffset }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [headerClass, setHeaderClass] = useState('header');

  useEffect(() => {
    let prevScroll = 0;
    const handleScroll = throttle(() => {
      // with offset check if scrolled
      setIsScrolled(window.scrollY > scrollOffset);

      // check scroll direction
      setIsHidden(prevScroll < window.scrollY);
      prevScroll = window.scrollY;
    }, 500);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let newHeaderClass = 'header';

    if (isScrolled) {
      newHeaderClass += ' scrolled';
    }

    if (isHidden) {
      newHeaderClass += ' hidden';
    }

    setHeaderClass(newHeaderClass);
  }, [isScrolled, isHidden]);

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
    <header className={headerClass}>
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
