import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { withLayout } from 'components/Layout/layout';
import throttle from 'lodash.throttle';
import Loading from 'components/Loading/loading';

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
        <img
          key={id}
          className={imageClass}
          src={image.url}
          alt={name}
        />
      );
    })
  );

  const renderTitle = () => {
    let text = 'Joimee Tan Cajandab';
    text = text.replace(/[oiea]/gi, '<span class="about__title--em">$&</span>');

    return (
      <div className="about__title" dangerouslySetInnerHTML={{ __html: text }} />
    );
  };

  if (loading || !data) return <Loading />;

  return (
    <div className="about">
      <div className="grid">
        {renderTitle()}
        <div className="about__content">
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis justo et enim egestas gravida.
          </p>
          <p className="about__text">
            Praesent commodo orci tellus, in tristique nibh fermentum sed.
          </p>
          <p className="about__text">
            Etiam vel ultrices magna. Donec condimentum finibus odio eu
            sollicitudin. Cras viverra est eget erat feugiat feugiat.
          </p>
        </div>
      </div>
      <div className="about__gallery">
        {renderImage(data.galleries)}
      </div>
    </div>
  );
};

export default withLayout(About);
