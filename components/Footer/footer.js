import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Text3D from 'components/Text3D/text3D';
import footerLinks from './footerLinks';

const Footer = ({ router }) => {
  const date = new Date();
  const year = date.getFullYear();
  const { pathname } = router;

  // check if the "current" base url match the argument path
  const checkBasePath = path => pathname.search((new RegExp(`^${path}`))) === 0;

  // render links
  const renderLinks = (links, props = {}) => (
    links.map(({ href, name }) => {
      // the regex pattern will check for http or https prefixes
      const isWithinPage = href.search(/http?s:\/\//g) >= 0;
      let className = 'footer-list__item';

      // set to active
      if (checkBasePath(href)) className += ' active';

      // return native anchor tag for third party url's
      if (isWithinPage) {
        return (
          <a
            key={href}
            className={className}
            href={href}
            {...props}
          >
            {name}
          </a>
        );
      }

      // return nextjs provided link
      return (
        <Link key={href} href={href}>
          <a className={className} {...props}>{name}</a>
        </Link>
      );
    })
  );

  return (
    <footer className="footer">
      <div className="grid">
        <Link href="/">
          <a className={pathname.length === 1 ? 'footer__title active' : 'footer__title'}>
            <Text3D text="bok" color="#838383" />
          </a>
        </Link>
        <div className="footer-list">
          <h4 className="footer-list__title">Menu</h4>
          {renderLinks(footerLinks.menu)}
        </div>
        <div className="footer-list">
          <h4 className="footer-list__title">Social Stuff</h4>
          {renderLinks(
            footerLinks.social_stuff,
            { rel: 'noopener noreferrer', target: '_blank' },
          )}
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom__text">
            {`bok © ${year}; All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Footer);
