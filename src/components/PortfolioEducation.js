import _ from 'lodash';
import React from 'react';
import { collegeEducation, certs } from '../resources/educationSources';

const PortfolioEducation = () => {
  function renderCollege() {
    return _.map(
      collegeEducation,
      ({ degreeLevel, graduation, major, university, cgpa }) => {
        return (
          <div className='col-md-6 pt-5 px-2' key={degreeLevel}>
            <div className='card education'>
              <div className='card-body bg-light'>
                <h4 className='card-title'>{degreeLevel}</h4>
                <small className='text-muted'>{graduation}</small>
                <hr />
                <p className='card-text education--degree'>{major}</p>
                <p className='card-text'>{university}</p>
                <p className='card-text'>Cumulative GPA: {cgpa} / 4.0</p>
              </div>
            </div>
          </div>
        );
      }
    );
  }

  function renderCerts() {
    return _.map(certs, ({ title, year, id, url }) => {
      return (
        <tr key={id}>
          <td>{title}</td>
          <td className='d-none d-md-block'>{year}</td>
          <td>
            <a
              id={id}
              target='_blank'
              href={url}
              className='btn btn-outline-danger'>
              View
            </a>
          </td>
        </tr>
      );
    });
  }

  function renderAchievemnets() {
    return (
      <div className='col mb-5 pt-5 px-2'>
        <div className='card education'>
          <div className='card-body bg-light'>
            <h4 className='card-title'>Achievements | Certifications</h4>

            <table className='table table-hover mb-0'>
              <thead>
                <tr className='education--certs'>
                  <th>Name</th>
                  <th className='d-none d-md-block'>Year</th>
                  <th>Access Link</th>
                </tr>
              </thead>
              <tbody>{renderCerts()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='py-5 text-center bg-faded' id='edu'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='info-header'>
              <h1
                className='intro--header pb-3 pt-5'
                data-aos='fade-down'
                data-aos-duration='800'>
                EDUCATION
              </h1>
            </div>
          </div>
        </div>
        <div className='row'>{renderCollege()}</div>
        <div className='row'>{renderAchievemnets()}</div>
      </div>
    </section>
  );
};

export default PortfolioEducation;
