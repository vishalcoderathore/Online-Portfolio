import React from 'react';
import PortfolioProjects_Modals from './PortfolioProjects_Modals';
import GithubList from './GithubList';

const PortfolioProjects = () => (
    <section className="py-5 text-center bg-faded" id="myProjects">
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <div className="info-header">
                        <h1 className="intro--header pb-3 pt-5" data-aos="fade-down" data-aos-duration="800">
                            MY PROJECTS
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col  px-2">
                    <p>I like to learn new skills and apply them in projects. Here are a few.</p>
                </div>
            </div>

            <div className="row mb-4">

                <div className="col-md-3 pb-3">
                    <div className="hovereffect">
                        <img src="/images/expensify.png" className="project--images img-responsive" />
                        <div className="overlay">
                            <a className="info" data-toggle="modal" href="#project-1" role="button">Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-3">
                    <div className="hovereffect">
                        <img src="/images/product.png" className="project--images img-responsive" />
                        <div className="overlay">
                            <a className="info" data-toggle="modal" href="#project-2" role="button">Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-3">
                    <div className="hovereffect">
                        <img src="/images/indecision.png" className="project--images img-responsive" />
                        <div className="overlay">
                            <a className="info" data-toggle="modal" href="#project-3" role="button">Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pb-3">
                    <div className="hovereffect">
                        <img src="/images/portfolio.png" className="project--images img-responsive" />
                        <div className="overlay">
                            <a className="info" data-toggle="modal" href="#project-4" role="button">Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <GithubList />
                </div>
            </div>
        </div>

        <PortfolioProjects_Modals />
    </section>
);

export default PortfolioProjects;