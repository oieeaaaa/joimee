import React, { useState } from 'react';
import Layout from 'components/Layout/layout';
import Button from 'components/Button/button';
import Projects from 'components/Projects/projects';
import Posts from 'components/Posts/posts';
import posts from 'data/posts';
import projects from 'data/projects';

const Works = () => {
  const [mode, setMode] = useState('project');

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
            {mode !== 'project' ? <Posts data={posts} /> : <Projects data={projects} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
