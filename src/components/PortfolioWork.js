import React from 'react';

class PortfolioWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readButtonWork1: false,
            readButtonWork2: false,
            readButtonWork3: false
        };
    }

    onReadMoreClick = (e) => {
        // (e.target.id === "workButton1" || e.target.id === "workButton1--icon") ? 
        //     this.setState((prevState) => {
        //         return {
        //             readButtonWork1: !(prevState.readButtonWork1)
        //         }
        //     }, () => {
        //             {this.state.readButtonWork1 === true ? 
        //                 this.changeButtonContent('#workButton1--icon', ' Read Less', 'fa fa-minus', 'fa fa-plus') : 
        //                 this.changeButtonContent('#workButton1--icon', ' Read More', 'fa fa-plus', 'fa fa-minus')
        //             }
        //         }
        //     ) : 
        //     this.setState((prevState) => {
        //         return {
        //             readButtonWork2: !(prevState.readButtonWork2)
        //         }
        //     }, () => {
        //             {this.state.readButtonWork2 === true ? 
        //                 this.changeButtonContent('#workButton2--icon', ' Read Less', 'fa fa-minus', 'fa fa-plus') : 
        //                 this.changeButtonContent('#workButton2--icon', ' Read More', 'fa fa-plus', 'fa fa-minus')
        //             }
        //         }
        //     );


            if(e.target.id === "workButton1" || e.target.id === "workButton1--icon"){
                this.setState((prevState) => {
                    return {
                        readButtonWork1: !(prevState.readButtonWork1)
                    }
                }, () => {
                        {this.state.readButtonWork1 === true ? 
                            this.changeButtonContent('#workButton1--icon', ' Read Less', 'fa fa-minus', 'fa fa-plus') : 
                            this.changeButtonContent('#workButton1--icon', ' Read More', 'fa fa-plus', 'fa fa-minus')
                        }
                    }
                )
            }
            else if(e.target.id === "workButton2" || e.target.id === "workButton2--icon"){
                this.setState((prevState) => {
                    return {
                        readButtonWork2: !(prevState.readButtonWork2)
                    }
                }, () => {
                        {this.state.readButtonWork2 === true ? 
                            this.changeButtonContent('#workButton2--icon', ' Read Less', 'fa fa-minus', 'fa fa-plus') : 
                            this.changeButtonContent('#workButton2--icon', ' Read More', 'fa fa-plus', 'fa fa-minus')
                        }
                    }
                );
            }
            else if(e.target.id === "workButton3" || e.target.id === "workButton3--icon"){
                this.setState((prevState) => {
                    return {
                        readButtonWork3: !(prevState.readButtonWork3)
                    }
                }, () => {
                        {this.state.readButtonWork3 === true ? 
                            this.changeButtonContent('#workButton3--icon', ' Read Less', 'fa fa-minus', 'fa fa-plus') : 
                            this.changeButtonContent('#workButton3--icon', ' Read More', 'fa fa-plus', 'fa fa-minus')
                        }
                    }
                );
            }
    };

    changeButtonContent = (iconId, iconText, iconClass, removeClass) => {
        $(iconId).html(function () {
            return (iconText);
        });
        $(iconId).removeClass(removeClass);
        $(iconId).addClass(iconClass);
    }

    render() {
        return (
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
                                    <h4 className="card-title">Multi-Tech Systems - <em>Software Engineer</em></h4>
                                    <small className="text-muted">06-2018 - Current - Minneapolis, MN </small>
                                    <hr />
                                    <div className="card-text text-left">
                                        <p>
                                            Migrating Node-Red from existing Conduits (IoT Gateway Devices) to the AWS Cloud infrastructure to provide improved data processing and systems engineering capabilities. Developed docker containers behind Nginx servers and used docker-gen to generate reverse proxy configs for Nginx.  
                                        </p>

                                        <div className="collapse pt-2" id="work3">
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Migrating Node-Red from Conduits to Amazon Web Services using services like EC2 and RDS</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Used Docker Containers to provision Node-Red images. These containers can be scaled up or down depending on the load requirements and accessed via path based routing using Nginx conf file.</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Used Mosquitto MQTT over websockets to send real time data from Conduits (IoT Gateway devices) the cloud.</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Used Nginx to support path based routing to different Node-Red containers. This is acheived by using docker-gen that generates reverse proxies for Nginx.</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Developed Node-Red Dashboards to track real time data using widgets like gauges, graphs, charts and ui controls. These dashboards are highly customizable and the customers can create their custom dashboards out of the box.</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Used Python scripts to run/test data simulations on the MultiConnect® mCards™ (MTAC Series) that connects and sends real time data to the MultiConnect® Conduit™ (MTCDT Series), that in turns forwards the data to the nearest AWS EC2 instance.</span>
                                            </p>
                                        </div>
                                        <button
                                            aria-expanded="false"
                                            aria-controls="work3"
                                            className="btn btn-outline-success float-right"
                                            data-toggle="collapse"
                                            data-target="#work3"
                                            id="workButton3"
                                            type="button"
                                            onClick={this.onReadMoreClick}
                                        >
                                            <i className="fa fa-plus" aria-hidden="true" id="workButton3--icon"> Read More </i>  
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col pt-1 px-2">
                            <div className="card education">
                                <div className="card-body bg-faded">
                                    <h4 className="card-title">Sherwin Williams - <em>Full Stack Developer</em></h4>
                                    <small className="text-muted">08-2016 - 08-2017 - Cleveland, OH <em>(Contract Position)</em></small>
                                    <hr />
                                    <div className="card-text text-left">
                                        <p>
                                            Worked on upgrading Physical Inventory Adjustment (PIA), and added new functionalities ranging from front end to back end. The application is used in all 4000 SW stores across U.S. and Canada by the store managers to track their inventory online.
                                        </p>

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
                                                <span className="ml-1">Used SAP Business Objects to create and schedule product statistics reports.
                                                </span>
                                            </p>
                                            <p>
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <span className="ml-1">Worked closely with different teams to establish problem specification and system designs.</span>
                                            </p>
                                        </div>
                                        <button
                                            aria-expanded="false"
                                            aria-controls="work1"
                                            className="btn btn-outline-success float-right"
                                            data-toggle="collapse"
                                            data-target="#work1"
                                            id="workButton1"
                                            type="button"
                                            onClick={this.onReadMoreClick}
                                        >
                                            <i className="fa fa-plus" aria-hidden="true" id="workButton1--icon"> Read More </i>  
                                        </button>
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
                                    <small className="text-muted">07-2015 - 07-2016 - Philadelphia, PA <em>(Contract Position)</em></small>
                                    <hr />
                                    <div className="card-text text-left">
                                        <p>
                                            Worked on upgrading Cyber Bank Reports (CBR), that provides internal customers of the bank the ability to login and check their accounts with the bank online and download the transaction reports pdf’s.
                                        </p>

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
                                        <button
                                            aria-expanded="false"
                                            aria-controls="work2"
                                            className="btn btn-outline-success float-right"
                                            data-toggle="collapse"
                                            data-target="#work2"
                                            id="workButton2"
                                            type="button"
                                            onClick={this.onReadMoreClick}
                                        >
                                            <i className="fa fa-plus" aria-hidden="true" id="workButton2--icon"> Read More </i>  
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioWork;