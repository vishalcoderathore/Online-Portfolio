import React from 'react';

class Header extends React.Component {

    scrollToSection = (self) => {
        // get the target href
        var href = $(self).attr('href');
        // get the target position
        var targetPos = typeof $(href).offset() !== "undefined" ? $(href).offset().top : 0;

        // scroll to target
        $('html, body').animate({
            scrollTop: targetPos
        }, 400);
    };

    scrollWindow = (event) => {
        this.scrollToSection(event.target);
        event.preventDefault();
    };

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-4" >
                <div className="container">
                    <a href="#" className="navbar-brand"><span><i className="fa fa-user-o" aria-hidden="true"></i></span> Portfolio</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavbar"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavbar">
                        <ul className="navbar-nav ml-auto" onClick={this.scrollWindow}>
                            <li className="nav-item" id="Home">
                                <a href="#aboutMe" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item" id="Education">
                                <a href="#edu" className="nav-link">Education</a>
                            </li>
                            <li className="nav-item" id="Work">
                                <a href="#myWork" className="nav-link">Work</a>
                            </li>
                            <li className="nav-item" id="Projects">
                                <a href="#myProjects" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item" id="Contact">
                                <a href="#myContact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Header;