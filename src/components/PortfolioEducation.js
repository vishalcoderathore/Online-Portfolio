import _ from 'lodash';
import React from 'react';
import { collegeEducation } from '../resources/educationSources';

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

        <div className='row'>
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
                  <tbody>
                    <tr>
                      <td>Google Developer Challenge Scholarship</td>
                      <td className='d-none d-md-block'>2018</td>
                      <td>
                        <a
                          id='google-dev-challange'
                          target='_blank'
                          href='https://drive.google.com/open?id=1FCnrDkJTJxWZvRe868I2KeY7Nkz4nyX0'
                          className='btn btn-outline-danger'>
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>Nginx Beginner to Advanced Course</td>
                      <td className='d-none d-md-block'>2018</td>
                      <td>
                        <a
                          id='nginx'
                          target='_blank'
                          href='https://drive.google.com/open?id=1YeCpS-Eqmy9gkee6XhZV4jYPRCs914rD'
                          className='btn btn-outline-danger'>
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>React Web Developer</td>
                      <td className='d-none d-md-block'>2018</td>
                      <td>
                        <a
                          id='react'
                          target='_blank'
                          href='https://drive.google.com/open?id=1AWDaKR90yXo_hxU8XXzjdS2zDAxIkhzL'
                          className='btn btn-outline-danger'>
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>Bootstrap 4 Course</td>
                      <td className='d-none d-md-block'>2017</td>
                      <td>
                        <a
                          id='bootstrap'
                          target='_blank'
                          href='https://drive.google.com/open?id=17C1JdIvJBhO4y9IbWgVgYw5WIONHzrfi'
                          className='btn btn-outline-danger'>
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>Command Line Essentials</td>
                      <td className='d-none d-md-block'>2017</td>
                      <td>
                        <a
                          id='git'
                          target='_blank'
                          href='https://drive.google.com/open?id=1ql0Ra_fhSx1_YwGa-rQ1vsk2BZG1QONo'
                          className='btn btn-outline-danger'>
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Oracle Certified Professional, Java SE 6 Programmer
                      </td>
                      <td className='d-none d-md-block'>2015</td>
                      <td>
                        <a
                          id='java'
                          target='_blank'
                          href='https://drive.google.com/open?id=1ZG4ZqjHuqENPAYBy5C8Y0b8EoozcA87c'
                          className='btn btn-outline-danger'>
                          {' '}
                          View{' '}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioEducation;
