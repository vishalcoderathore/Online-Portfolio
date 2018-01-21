import React from 'react';
import { shallow } from 'enzyme';
import PortfolioFooter from '../../components/PortfolioFooter';

test('should render footer correctly', () => {
    const wrapper = shallow(<PortfolioFooter />);
    expect(wrapper).toMatchSnapshot();
});