import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-4" >
                <div className="container">
                    <a href="#" className="navbar-brand"><span><i className="fa fa-user-o" aria-hidden="true"></i></span> Portfolio</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavbar"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" id="Home">
                                <a href="#aboutMe" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item" id="Education">
                                <a href="#edu" className="nav-link">Education</a>
                            </li>
                            <li className="nav-item" id="Work">
                                <a href="#" className="nav-link">Work</a>
                            </li>
                            <li className="nav-item" id="Projects">
                                <a href="#" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item" id="Contact">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Header;