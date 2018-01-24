import React from 'react';

const PortfolioProjects_Modals = () => (
    <div>
        <div className="modal fade" id="project-1" tabIndex="-1" role="dialog" aria-labelledby="project-1-Label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="project-1-Label">Expensify</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-left">
                        <div className="row">

                            <div className="col-9"> <p className="text-muted">Track your expenses anytime anywhere.</p></div>
                            <div className="col-3">
                                <a href="http://track-expenses.herokuapp.com" target="_blank" className="btn btn-outline-info">Demo</a>
                            </div>
                        </div>
                        <p>Web App using React.JS that is used to track your expenses. You can add, view, modify and remove your expenses.</p>
                        <p>Login using your Google Account. Click on Add Expense to add any new expense. Click on existing expese to either Update or Remove the expense. Click the app logo to reach the dashboard page.</p>
                        <p>App is built using the following tech stack :</p>
                        <ul>
                            <li>Babel</li>
                            <li>Enzyme</li>
                            <li>Express</li>
                            <li>Firebase (database and authentication)</li>
                            <li>Font Awesome</li>
                            <li>Heroku</li>
                            <li>Jest</li>
                            <li>Live Server</li>
                            <li>Moment</li>
                            <li>Normalize.CSS</li>
                            <li>Redux</li>
                            <li>SCSS</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="project-2" tabIndex="-1" role="dialog" aria-labelledby="project-2-Label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="project-1-Label">Product Marketing Site</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-left">
                        <div className="row">

                            <div className="col-9"> <p className="text-muted">Site showcasing a product.</p></div>
                            <div className="col-3">
                                <a href="http://product.vishalrathore.info/" target="_blank" className="btn btn-outline-info">Demo</a>
                            </div>
                        </div>
                        <p>Multi page sample website showcasing mobile phones and sample plans.</p>
                        <p>App is built using the following tech stack :</p>
                        <ul>
                            <li>Bootstrap 4</li>
                            <li>Gulp</li>
                            <li>JQuery</li>
                            <li>Popper.JS</li>
                            <li>SASS</li>
                            <li>Font Awesome</li>
                            <li>Amazon Web Services (AWS) S3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="project-3" tabIndex="-1" role="dialog" aria-labelledby="project-3-Label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="project-1-Label">Indecision</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-left">
                        <div className="row">
                            <div className="col-9"> <p className="text-muted">Web App that makes decisions for you. You can add, view, and remove your tasks/options.</p></div>
                            <div className="col-3">
                                <a href="http://indecisionapp.herokuapp.com/" target="_blank" className="btn btn-outline-info">Demo</a>
                            </div>
                        </div>
                        <p>Basic App that takes in user inputs and stores in an state array. Then prints out an element in a random fashion.</p>
                        <p>Click on Add Option to add a new option. You can add multiple options or just stick to one. Upon addition of an option, the "What should I do?" button gets unlocked and becomes clickable. When the button is clicked, the app would choose an option for you from the provided options.You can remove "a" option or can also remove all the options at once. The app is also responsive and so would run on your mobile devices as well.</p>
                        <p>App is built using the following tech stack :</p>
                        <ul>
                            <li>Babel</li>
                            <li>Express</li>
                            <li>React v15.6.1</li>
                            <li>Webpack v3.1.0</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="project-4" tabIndex="-1" role="dialog" aria-labelledby="project-4-Label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="project-1-Label">My Portfolio</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-left">
                        <div className="row">
                            <div className="col-9"> <p className="text-muted">You are currently viewing this project</p></div>
                        </div>
                        <p>Online portfolio showcasing my skills and experience.</p>

                        <p>Website is built using the following tech stack :</p>
                        <ul>
                            <li>Babel</li>
                            <li>Express</li>
                            <li>Enzyme</li>
                            <li>Font Awesome</li>
                            <li>React v16</li>
                            <li>SASS</li>
                            <li>Webpack v3.1.0</li>
                            <li>Amazon Web Services - IAM</li>
                            <li>Amazon Web Services - Route 53 & DNS</li>
                            <li>Amazon Web Services - CloudFront & SSL</li>
                            <li>Amazon Web Services - CodeBuild & CodePipeline</li>
                            <li>Amazon Web Services - AWS Lambda</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioProjects_Modals;