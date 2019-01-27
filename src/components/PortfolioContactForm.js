import _ from 'lodash';
import React from 'react';
import PortfolioProjects_Modals from './PortfolioProjects_Modals';
import GithubList from './GithubList';
import LPAWS from '../aws/awsEmail';
import ErrorPopup from './ErrorPopup';
import SuccessPopup from './SuccessPopup';
import MapWithAMakredInfoWindow from './GoogleMaps';
import jQuery from 'jquery';
import {
  contactPlatformLinks,
  googleMapsURL
} from '../resources/contactSources';

class PortfolioContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: this.props.fName ? this.props.fName : '',
      lName: this.props.lName ? this.props.lName : '',
      email: this.props.email ? this.props.email : '',
      contactNum: this.props.contactNum ? this.props.contactNum : '',
      message: this.props.message ? this.props.message : '',
      error: this.props.error ? this.props.error : false,
      submitStatus: this.props.submitStatus ? this.props.submitStatus : false
    };
  }

  onFirstNameChange = e => {
    const updatedfName = e.target.value;
    this.setState(() => {
      return {
        fName: updatedfName
      };
    });
  };

  onLastNameChange = e => {
    const updatedlName = e.target.value;
    this.setState(() => {
      return {
        lName: updatedlName
      };
    });
  };

  onEmailChange = e => {
    const updatedEmail = e.target.value;
    this.setState(() => {
      return {
        email: updatedEmail
      };
    });
  };

  onContactNumberChange = e => {
    const updatedContactNum = e.target.value;
    this.setState(() => {
      return {
        contactNum: updatedContactNum
      };
    });
  };

  onMessageChange = e => {
    const updatedMessage = e.target.value;
    this.setState(() => {
      return {
        message: updatedMessage
      };
    });
  };

  scrollToContact = () => {
    const $ = jQuery;
    // get the target position
    var targetPos = $('#myContact').offset().top;
    // scroll to target
    $('html, body').animate(
      {
        scrollTop: targetPos
      },
      400
    );
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.fName === '' ||
      this.state.lName === '' ||
      this.state.email === ''
    ) {
      this.setState(() => {
        return {
          error: true,
          submitStatus: false
        };
      });
    } else {
      this.setState(
        {
          error: false,
          submitStatus: true
        },
        () => {
          LPAWS.sendToTopic(
            this.state.fName,
            this.state.lName,
            this.state.email,
            this.state.contactNum,
            this.state.message
          );
          document.querySelector('#fName').value = '';
          document.querySelector('#lName').value = '';
          document.querySelector('#emailAddress').value = '';
          document.querySelector('#contactNumber').value = '';
          document.querySelector('#msg-area').value = '';
          this.setState(() => {
            return {
              fName: '',
              lName: '',
              email: '',
              contactNum: '',
              message: ''
            };
          });
        }
      );
    }
    this.scrollToContact();
  };

  renderContact() {
    return _.map(
      contactPlatformLinks,
      ({ href, className, title, iconClassName }) => {
        return (
          <div className='col-4' key={title}>
            <a
              href={href}
              target='_blank'
              className={className}
              data-toggle='tooltip'
              data-placement='top'
              title={title}>
              <i className={iconClassName} aria-hidden='true' />
            </a>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <section className='pt-5 text-center bg-light' id='myContact'>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <div className='info-header'>
                <h1
                  className='intro--header pb-3 pt-5'
                  data-aos='fade-down'
                  data-aos-duration='800'>
                  CONTACT ME
                </h1>
              </div>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-6 text-center py-2'>
              <h4>Find me here</h4>
            </div>
            <div className='col-md-6 py-2'>
              <div className='row'>{this.renderContact()}</div>
            </div>
          </div>

          <div className='row mb-4'>
            <div className='col'>
              <div className='card'>
                <div className='card-body p-4'>
                  <form id='submitForm' onSubmit={this.onSubmit}>
                    <h5 className='text-center'>
                      Please fill out this form to contact me
                    </h5>
                    {this.state.error && <ErrorPopup />}
                    {this.state.submitStatus && <SuccessPopup />}
                    <hr />
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group input-group'>
                          <div className='input-group-addon'>
                            <i
                              className='fa fa-address-card'
                              aria-hidden='true'
                            />
                          </div>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='First Name*'
                            id='fName'
                            onChange={this.onFirstNameChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group input-group'>
                          <div className='input-group-addon'>
                            <i
                              className='fa fa-address-card'
                              aria-hidden='true'
                            />
                          </div>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Last Name*'
                            id='lName'
                            onChange={this.onLastNameChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group input-group'>
                          <div className='input-group-addon'>
                            <i className='fa fa-envelope' aria-hidden='true' />
                          </div>
                          <input
                            type='email'
                            className='form-control'
                            placeholder='Email Address*'
                            id='emailAddress'
                            onChange={this.onEmailChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group input-group'>
                          <div className='input-group-addon'>
                            <i className='fa fa-phone' aria-hidden='true' />
                          </div>
                          <input
                            type='tel'
                            className='form-control'
                            placeholder='Contact Number'
                            id='contactNumber'
                            onChange={this.onContactNumberChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group input-group'>
                          <div className='input-group-addon'>
                            <i className='fa fa-comment' aria-hidden='true' />
                          </div>
                          <textarea
                            className='form-control'
                            placeholder='Message'
                            id='msg-area'
                            onChange={this.onMessageChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-12 form-group'>
                        <button
                          type='submit'
                          className='btn btn-outline-danger'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <MapWithAMakredInfoWindow
              googleMapURL={googleMapsURL}
              loadingElement={<div />}
              containerElement={<div className='maps--containerElement' />}
              mapElement={<div className='maps--mapElement' />}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioContactForm;
