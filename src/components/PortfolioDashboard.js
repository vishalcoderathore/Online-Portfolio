import React from 'react';
import Navbar from './Navbar';
import PortfolioIntro from './PortfolioIntro';
import PortfolioEducation from './PortfolioEducation';
import PortfolioFooter from './PortfolioFooter';
import PortfolioWork from './PortfolioWork';

const PortfolioDashboard = () => (
    <div>
        <Navbar />
        <PortfolioIntro />
        <PortfolioEducation />
        <PortfolioWork />
        <PortfolioFooter />
    </div>
);

export default PortfolioDashboard;