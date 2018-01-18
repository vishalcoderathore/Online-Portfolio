import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound  extends React.Component {
    
    onGoToHome = () => {
        this.props.history.push('/');
    }
    
    render(){
        return(
            <section className="intro">
        <div className="content">
            <h1>OOPS!</h1>
            <h2>404, Requested Page not Available</h2>
        </div>
        <div className="content">
            <a className="btnLanding" onClick={this.onGoToHome}>Go to Home</a>
        </div>
    </section>
        );
    };
};

export default PageNotFound;