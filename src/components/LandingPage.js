import React from 'react';

class LandingPage extends React.Component {
    
    onWelcome = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="intro">
                <div className="content">
                    <h1>hello, hola, namaste</h1>
                </div>
                <div className="content">
                    <a className="btnLanding" onClick={this.onWelcome}>Welcome</a>
                </div>
            </div >
        );
    };
};

export default LandingPage;