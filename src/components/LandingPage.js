import React from 'react';

class LandingPage extends React.Component {
    
    onWelcome = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="intro">
                <div className="content">
                    <h1 className="animated bounceInLeft">hello, hola, namaste</h1>
                </div>
                <div className="content animated bounceInRight">
                    <a className="btnLanding " onClick={this.onWelcome}>Welcome</a>
                </div>
            </div >
        );
    };
};

export default LandingPage;