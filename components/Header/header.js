import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import useScroll from 'js/hooks/useScroll';
import navList from './navList';

const Header = ({ router, scrollOffset }) => {
  const header = useRef(null);
  const [] = useScroll(handleScroll, scrollOffset); // eslint-disable-line

  function handleScroll({ bottom, scrolled }) {
    const { current: h } = header;
    if (!h) return;
    if (scrolled) {
      h.classList.add('scrolled');
    } else {
      h.classList.remove('scrolled');
    }

    // check scroll direction
    if (bottom) {
      h.classList.add('hidden');
    } else {
      h.classList.remove('hidden');
    }
  }

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
