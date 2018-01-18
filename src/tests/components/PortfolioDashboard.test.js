import React from 'react';
import PortfolioDashboard from '../../components/PortfolioDashboard';
import { shallow } from 'enzyme';

test('should render portfolio dashboard page correctly', () => {
    const wrapper = shallow(<PortfolioDashboard />);
    expect(wrapper).toMatchSnapshot();
});