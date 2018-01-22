import React from 'react';
import Navbar from './Navbar';
import PortfolioIntro from './PortfolioIntro';
import PortfolioEducation from './PortfolioEducation';
import PortfolioFooter from './PortfolioFooter';
import PortfolioProjects from './PortfolioProjects';
import PortfolioWork from './PortfolioWork';
import AOS from 'aos';

class PortfolioDashboard extends React.Component {

    componentWillMount() {
        AOS.init();
    }

    render() {
        return (
            <div>
                <Navbar />
                <PortfolioIntro />
                <PortfolioEducation />
                <PortfolioWork />
                <PortfolioProjects />
                <PortfolioFooter />
            </div>
        );
    };
}

export default PortfolioDashboard;