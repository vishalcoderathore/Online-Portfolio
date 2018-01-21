import React from 'react';

const PortfolioWork = () => (
    <section className="py-5 text-center bg-light" id="myWork">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="info-header">
                        <h1 className="intro--header pb-3 pt-5" data-aos="fade-down" data-aos-duration="800">
                            WORK
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col pt-5 px-2">
                    <div className="card education">
                        <div className="card-body bg-faded">
                            <h4 className="card-title">Sherwin Williams - <em>Full Stack Developer</em></h4>
                            <small className="text-muted">08-2016 - 08/2017 - Cleveland, OH <em>(Contract Position)</em></small>
                            <hr />
                            <div className="card-text text-left">
                                <p>
                                    Worked on upgrading Physical Inventory Adjustment (PIA), and added new functionalities ranging from front end to back end. The application is used in all 4000 SW stores across U.S. and Canada by the store managers to track their inventory online.
                                </p>
                                <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target="#work1" aria-expanded="false" aria-controls="work1">
                                    Read More...
                                </button>
                                <div className="collapse pt-2" id="work1">
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Developed new features to enhance user experience and integrated the app with modified database.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Used Hibernate as the ORM tool for connecting to the DAO layer and storing stores and
                                        product information.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Developed business logic for the service layer to manage new improvements using Java 1.8.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Written batch scripts to load new data
                                        from flat files into the database from remote Unix
                                        machines.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Used JQuery extensively to modify front end and add user friendly widgets.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Worked closely with different teams to establish problem specification and system designs.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col pt-1 px-2">
                    <div className="card education">
                        <div className="card-body bg-faded">
                            <h4 className="card-title">Wells Fargo - <em>Java Developer</em></h4>
                            <small className="text-muted">07-2015 - 07/2016 - Philadelphia, PA <em>(Contract Position)</em></small>
                            <hr />
                            <div className="card-text text-left">
                                <p>
                                    Worked on upgrading Cyber Bank Reports (CBR), that provides internl custormers of the bank the ability to login and check their accounts with the bank online and download the transaction reports pdf’s.
                                </p>
                                <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target="#work2" aria-expanded="false" aria-controls="work2">
                                    Read More...
                                </button>
                                <div className="collapse pt-2" id="work2">
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Used Wells Fargo custom tags to re - write the front end to make the app ADA compliant.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Custom tags were based on YUI framework and were called WF-RIA 2 tags.
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Developed DAO layer and performed SQL queries to store and retrieve database results.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <span className="ml-1">Utilized SVN to share and maintain the source code and Eclipse
                                        as the IDE.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PortfolioWork;