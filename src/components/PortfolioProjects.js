import React from 'react';
import PortfolioProjects_Modals from './PortfolioProjects_Modals';
import GithubList from './GithubList';
import _ from 'lodash';

const PortfolioProjects = () => {
  const projectImages = [
    {
      src: '/images/ifeedback.png',
      href: '#project-1'
    },
    {
      src: '/images/forkify.png',
      href: '#project-2'
    },
    {
      src: '/images/expensify.png',
      href: '#project-3'
    },
    {
      src: '/images/portfolio.png',
      href: '#project-4'
    }
  ];

  const listProjects = _.map(projectImages, ({ src, href }) => {
    return (
      <div className='col-md-3 pb-3' key={href}>
        <div className='hovereffect'>
          <img src={src} className='project--images img-responsive' />
          <div className='overlay'>
            <a className='info' data-toggle='modal' href={href} role='button'>
              Details
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className='py-5 text-center bg-faded' id='myProjects'>
      <div className='container'>
        <div className='row mb-4'>
          <div className='col'>
            <div className='info-header'>
              <h1
                className='intro--header pb-3 pt-5'
                data-aos='fade-down'
                data-aos-duration='800'>
                MY PROJECTS
              </h1>
            </div>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col  px-2'>
            <p>
              I like to learn new skills and apply them in projects. Here are a
              few. Click for more details.
            </p>
          </div>
        </div>

        <div className='row mb-4'>{listProjects}</div>
        <div className='row mb-4'>
          <div className='col'>
            <GithubList />
          </div>
        </div>
      </div>

      <PortfolioProjects_Modals />
    </section>
  );
};

export default PortfolioProjects;
