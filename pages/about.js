import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Layout from 'components/Layout/layout';
import throttle from 'lodash.throttle';
import Loading from 'components/Loading/loading';
import ImgLazy from 'components/ImgLazy/imgLazy';

const GET_GALLERIES = gql`
query Galleries($last: Int) {
  galleries(last: $last) {
    id,
    name,
    image {
      url
      width,
      height
    }
  }
  total: galleriesConnection {
    aggregate {
      count
    }
  }
}
`;

const About = () => {
  const imageToDisplay = 5;
  const [limit, setLimit] = useState(imageToDisplay);
  const [loadGalleries, { data, loading }] = useLazyQuery(GET_GALLERIES, {
    variables: {
      last: limit,
    },
  });

  useEffect(() => {
    loadGalleries({
      variables: {
        last: limit,
      },
    });
  }, [limit]);

  useEffect(() => {
    if (!data) return;
    const total = data.total.aggregate.count;

    window.addEventListener('scroll', handleInfiniteScroll);
    if (total <= imageToDisplay) {
      window.removeEventListener('scroll', handleInfiniteScroll);
    }

    return () => window.removeEventListener('scroll', handleInfiniteScroll); // eslint-disable-line
  }, [data]);

  function handleInfiniteScroll() {
    if (loading) return;
    const OFFSET = 50;
    const currentHeight = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    throttle(() => {
      if (currentHeight + OFFSET >= bodyHeight) {
        setLimit(10);
      }
    }, 300)();
  }


  const renderImage = galleries => (
    galleries.map(gallery => {
      const { id, name, image } = gallery;
      let imageClass = 'about__gallery-image';
      if (image.height > image.width) {
        imageClass += ' about__gallery-image--portrait';
      }

      return (
        <ImgLazy
          key={id}
          className={imageClass}
          src={image.url}
          alt={name}
        />
      );
    })
  );

  if (loading || !data) return <Loading />;

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
              Thanks.
            </p>
          </div>
        </div>
        <div className="about__gallery">
          {renderImage(data.galleries)}
        </div>
      </div>
    </Layout>
  );
};

export default About;
