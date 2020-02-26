import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import Layout from 'components/Layout/layout';
import Button from 'components/Button/button';
import Projects from 'components/Projects/projects';
import Posts from 'components/Posts/posts';
import Loading from 'components/Loading/loading';

const GET_POSTS = gql`
query Posts($last: Int) {
  posts(orderBy: createdAt_ASC, last: $last) {
    id,
    title,
    excerpt,
    createdAt,
  }

  total: postsConnection {
    aggregate {
      count
    }
  }
}
`;

const GET_PROJECTS = gql`
query Projects($last: Int) {
  projects(orderBy: createdAt_ASC, last: $last) {
    id,
    title,
    createdAt,
    theme {
      hex
    },
    image {
      url,
      fileName
    }
  }

  total: projectsConnection {
    aggregate {
      count
    }
  }
}
`;

const Works = () => {
  const itemsToDisplay = 5;
  const [limit, setLimit] = useState(itemsToDisplay);
  const [mode, setMode] = useState('project');
  const [loadPosts, { loading: loadingPosts, data: postsData }] = useLazyQuery(
    GET_POSTS,
    {
      variables: {
        last: limit,
      },
    },
  );
  const [loadProjects, { loading: loadingProjects, data: projectsData }] = useLazyQuery(
    GET_PROJECTS,
    {
      variables: {
        last: limit,
      },
    },
  );

  // initialize
  useEffect(() => {
    const payload = {
      variables: {
        last: limit,
      },
    };

    loadPosts(payload);
    loadProjects(payload);
  }, []);

  useEffect(() => {
    const payload = {
      variables: {
        last: limit,
      },
    };

    if (mode === 'post') {
      loadPosts(payload);
    } else {
      loadProjects(payload);
    }
  }, [limit]);

  useEffect(() => {
    if (!postsData || !projectsData) return;
    const postsTotal = postsData.total.aggregate.count;
    const projectsTotal = projectsData.total.aggregate.count;

    window.addEventListener('scroll', handleInfiniteScroll);
    if (postsTotal <= itemsToDisplay || projectsTotal <= itemsToDisplay) {
      window.removeEventListener('scroll', handleInfiniteScroll);
    }

    return () => window.removeEventListener('scroll', handleInfiniteScroll); // eslint-disable-line
  }, [postsData, projectsData]);


  function handleInfiniteScroll() {
    if (loadingPosts || loadingProjects) return;
    const OFFSET = 50;
    const currentHeight = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    throttle(() => {
      if (currentHeight + OFFSET >= bodyHeight) {
        addMoreItems();
      }
    }, 300)();
  }

  function addMoreItems(amount = itemsToDisplay) {
    setLimit(prevLimit => prevLimit + amount);
  }

  const renderShowMore = () => {
    let count;
    if (mode === 'project') {
      count = projectsData.total.aggregate.count;
    } else {
      count = postsData.total.aggregate.count;
    }

    if (count <= itemsToDisplay || limit > itemsToDisplay) {
      return '';
    }

    return (
      <Button className="works__show-more" onClick={handleShowMore}>
        Show more&nbsp;
        {mode}
      </Button>
    );
  };

  const handleShowMore = e => {
    e.preventDefault();
    addMoreItems();
  };

  if (!postsData || !projectsData) return <Loading />;

  return (
    <Layout title="Works" description="Collection of Projects and Posts">
      <div className="works">
        <div className="grid">
          <div className="works-hero">
            <Button
              className={mode !== 'project' ? 'button--active' : 'works-hero__btn'}
              onClick={() => setMode('project')}
            >
              Projects
            </Button>
            <div className="works__divider">
              <img
                className="works__divider-icon"
                src="/icons/arrow-down.svg"
                alt="arrow-down.svg"
              />
            </div>
            <Button
              className={mode !== 'post' ? 'button--active' : 'works-hero__btn'}
              onClick={() => setMode('post')}
            >
              Posts
            </Button>
          </div>
          <div className="works-content">
            {mode !== 'project' ? <Posts data={postsData.posts} /> : <Projects data={projectsData.projects} />}
            {renderShowMore()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
