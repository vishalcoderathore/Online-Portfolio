import React from 'react';

const PortfolioIntro = () => (
    <section className="py-5 text-center bg-light" id="aboutMe">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="info-header">
                        <h1 className="intro--header pb-3 pt-5 ">
                            ABOUT ME
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-5 px-2">
                    <p className="lead pb-3 intro--desc">
                        Hi! My name is Vishal Singh Rathore and I am a Software Developer located in Minneapolis, Minnesota. I've always been drawn to the overlap between design, develop and testing. My skills are broad: from front end to back end. I have worked with a variety of technologies including Java, PL/SQL, HTML, CSS, JavaScript and Jquery.
                </p>
                </div>
                <div className="col-md-6 pt-5 px-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <p className="progress-title">HTML5/CSS3</p>
                                <div className="progress">
                                    <div className="progress-bar progressInfo1" >
                                    </div>
                                </div>

                                <p className="progress-title">JavaScript</p>
                                <div className="progress">
                                    <div className="progress-bar progressInfo2">
                                    </div>
                                </div>

                                <p className="progress-title">Java</p>
                                <div className="progress">
                                    <div className="progress-bar progressInfo3">
                                    </div>
                                </div>

                                <p className="progress-title">PL/SQL</p>
                                <div className="progress">
                                    <div className="progress-bar progressInfo4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-5">
                    <img src="/images/vsr.jpg" alt="pic-not-found" className="img-fluid rounded-circle mb-3"></img>
                </div>
            </div>
        </div>
    </section>
);

export default PortfolioIntro;