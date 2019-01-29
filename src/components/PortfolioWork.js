import _ from 'lodash';
import React from 'react';
import { work } from '../resources/workSources';

const PortfolioWork = () => {
  function renderWork() {
    return _.map(
      work,
      ({
        workId,
        organization,
        position,
        duration,
        location,
        description,
        details
      }) => {
        const dataTargetForBtn = '#' + { workId }.workId;

        return (
          <React.Fragment key={organization}>
            <div className='row px-2'>
              <div className='row'>
                <div className='col pt-2'>
                  <div className='float-left text-left'>
                    <h4 className='item--heading'>{organization}</h4>
                    <h5 className='item--heading'>{position}</h5>
                    <h6 className='text-muted'>
                      {duration} - {location}
                    </h6>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col pt-2 text-left'>
                  <p className=''>{description}</p>
                </div>
              </div>
            </div>

            <div className='row px-2'>
              <div className='col text-left'>
                <div className='collapse' id={workId}>
                  <ul>
                    {_.map(details, (item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='row px-2'>
              <div className='col text-right'>
                <button
                  className='btn btn-outline-success collapsed'
                  type='button'
                  data-toggle='collapse'
                  data-target={dataTargetForBtn}
                  aria-expanded='false'
                  aria-controls={workId}>
                  <span className='if-not-collapsed'>
                    <i className='fa fa-minus' aria-hidden='true'>
                      {' '}
                      Read Less
                    </i>
                  </span>
                  <span className='if-collapsed'>
                    <i className='fa fa-plus' aria-hidden='true'>
                      {' '}
                      Read More
                    </i>
                  </span>
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      }
    );
  }

  return (
    <section className='py-5 text-center bg-light' id='myWork'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='info-header'>
              <h1
                className='intro--header pb-2 pt-5'
                data-aos='fade-down'
                data-aos-duration='800'>
                WORK
              </h1>
            </div>
          </div>
        </div>
        {renderWork()}
      </div>
    </section>
  );
};

export default PortfolioWork;
