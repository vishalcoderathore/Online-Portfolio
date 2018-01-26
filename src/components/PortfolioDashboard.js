import React from 'react';
import Navbar from './Navbar';
import PortfolioIntro from './PortfolioIntro';
import PortfolioEducation from './PortfolioEducation';
import PortfolioFooter from './PortfolioFooter';
import PortfolioProjects from './PortfolioProjects';
import PortfolioWork from './PortfolioWork';
import PortfolioContactForm from './PortfolioContactForm';
import AOS from 'aos';

class PortfolioDashboard extends React.Component {

    componentWillMount() {
        var init = [];
        var x = setInterval(function() {
            init.push(AOS.init());
            if (init.length >= 2) {
                 clearInterval(x);
            }
        }, 800);

        console.log(init.length);
    }

    render() {
        return (
            <div>
                <Navbar />
                <PortfolioIntro />
                <PortfolioEducation />
                <PortfolioWork />
                <PortfolioProjects />
                <PortfolioContactForm />
                <PortfolioFooter />
            </div>
        );
    };
}

export default PortfolioDashboard;