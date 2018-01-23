import React from 'react';
import PortfolioProjects_Modals from './PortfolioProjects_Modals';
import GithubList from './GithubList';

const PortfolioContactForm = () => (
    <section className="py-5 text-center bg-light" id="myContact">
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <div className="info-header">
                        <h1 className="intro--header pb-3 pt-5" data-aos="fade-down" data-aos-duration="800">
                            CONTACT ME
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6 text-center py-2">
                    <h4>Find me here</h4>
                </div>
                <div className="col-md-6 py-2">
                    <div className="row">
                        <div className="col-6">
                            <a href="https://github.com/vishalcoderathore" target="_blank" className="btn btn-warning">
                                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="https://github.com/vishalcoderathore" target="_blank" className="btn btn-info">
                                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body p-4">
                            <h5 className="text-center">
                                Please fill out this form to contact me
                            </h5>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email Address*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Contact Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-outline-danger">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PortfolioContactForm;