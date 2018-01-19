import React from 'react';
import Navbar from './Navbar';
import PortfolioIntro from './PortfolioIntro';
import PortfolioEducation from './PortfolioEducation';

const PortfolioDashboard = () => (
    <div>
        <Navbar />
        <PortfolioIntro />
        <PortfolioEducation />
    </div>
);

export default PortfolioDashboard;