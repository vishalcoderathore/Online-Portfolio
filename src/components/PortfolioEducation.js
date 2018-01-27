import React from 'react';

const PortfolioEducation = () => (
    <section className="py-5 text-center bg-faded" id="edu">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="info-header">
                        <h1 className="intro--header pb-3 pt-5" data-aos="fade-down" data-aos-duration="800">
                            EDUCATION
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-5 px-2">
                    <div className="card education">
                        <div className="card-body bg-light">
                            <h4 className="card-title">Master of Science</h4>
                            <small className="text-muted">2017 - Current</small>
                            <hr />
                            <p className="card-text education--degree">
                                M.S. in Software Engineering
                            </p>
                            <p className="card-text">
                                University of Minnesota, Minneapolis, MN
                            </p>
                            <p className="card-text">
                                CGPA: 4.0
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 pt-5 px-2">
                    <div className="card education">
                        <div className="card-body bg-light">
                            <h4 className="card-title">Bachelor of Science</h4>
                            <small className="text-muted">2015</small>
                            <hr />
                            <p className="card-text education--degree">
                                B.S. in Computer Engineering
                            </p>
                            <p className="card-text">
                                North Dakota State University, Fargo, ND
                            </p>
                            <p className="card-text">
                                CGPA: 3.0
                    </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col mb-5 pt-5 px-2">
                    <div className="card education">
                        <div className="card-body bg-light">
                            <h4 className="card-title">Achievements | Certifications</h4>

                            <table className="table table-hover mb-0">
                                <thead >
                                    <tr className="education--certs">

                                        <th>Name</th>
                                        <th className="d-none d-md-block">Year</th>
                                        <th>Access Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Google Developer Challenge Scholarship</td>
                                        <td className="d-none d-md-block">2018</td>
                                        <td><a id="google-dev-challange" target="_blank" href="https://drive.google.com/open?id=1FCnrDkJTJxWZvRe868I2KeY7Nkz4nyX0" className="btn btn-outline-danger">View</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>React Web Developer</td>
                                        <td className="d-none d-md-block">2018</td>
                                        <td>
                                            <a id="react" target="_blank" href="https://drive.google.com/open?id=1AWDaKR90yXo_hxU8XXzjdS2zDAxIkhzL" className="btn btn-outline-danger">View</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Bootstrap 4 Course</td>
                                        <td className="d-none d-md-block">2017</td>
                                        <td>
                                            <a id="bootstrap" target="_blank" href="https://drive.google.com/open?id=17C1JdIvJBhO4y9IbWgVgYw5WIONHzrfi" className="btn btn-outline-danger">View</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Command Line Essentials</td>
                                        <td className="d-none d-md-block">2017</td>
                                        <td>
                                            <a id="git" target="_blank" href="https://drive.google.com/open?id=1ql0Ra_fhSx1_YwGa-rQ1vsk2BZG1QONo" className="btn btn-outline-danger">View</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Oracle Certified Professional, Java SE 6 Programmer</td>
                                        <td className="d-none d-md-block">2015</td>
                                        <td>
                                            <a id="java" target="_blank" href="https://drive.google.com/open?id=1ZG4ZqjHuqENPAYBy5C8Y0b8EoozcA87c" className="btn btn-outline-danger"> View </a>
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

export default PortfolioEducation;