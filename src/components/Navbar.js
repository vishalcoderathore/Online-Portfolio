import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a href="#" className="navbar-brand"><span><i className="fa fa-apple" aria-hidden="true"></i></span> Navbar</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavbar"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Education</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Work</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
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