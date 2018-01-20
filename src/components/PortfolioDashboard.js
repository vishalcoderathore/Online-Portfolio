import React from 'react';
import Navbar from './Navbar';
import PortfolioIntro from './PortfolioIntro';
import PortfolioEducation from './PortfolioEducation';
import PortfolioFooter from './PortfolioFooter';

const PortfolioDashboard = () => (
    <div>
        <Navbar />
        <PortfolioIntro />
        <PortfolioEducation />
        <PortfolioFooter />
    </div>
);

export default PortfolioDashboard;