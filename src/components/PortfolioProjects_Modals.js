import _ from 'lodash';
import React from 'react';
import { modalDetails } from '../resources/projectSources';

const PortfolioProjects_Modals = () => {
  const listModals = _.map(
    modalDetails,
    ({ id, labelId, title, mutedText, href, projectInfo, appStack }) => {
      return (
        <div
          key={id}
          className='modal fade'
          id={id}
          tabIndex='-1'
          role='dialog'
          aria-labelledby={labelId}
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id={labelId}>
                  {title}
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-left'>
                <div className='row'>
                  <div className='col-9'>
                    {' '}
                    <p className='text-muted'>{mutedText}</p>
                  </div>
                  <div className='col-3'>
                    <a
                      href={href}
                      target='_blank'
                      className='btn btn-outline-info'>
                      Demo
                    </a>
                  </div>
                </div>
                <React.Fragment>
                  {_.map(projectInfo, (data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </React.Fragment>
                <p>App is built using the following tech stack :</p>
                <ul>
                  {_.map(appStack, (data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
  return <div>{listModals}</div>;
};

export default PortfolioProjects_Modals;
