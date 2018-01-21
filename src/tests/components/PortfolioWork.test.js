import React from 'react';
import { shallow } from 'enzyme';
import PortfolioWork from '../../components/PortfolioFooter';

test('should render portfolio work correctly', () => {
    const wrapper = shallow(<PortfolioWork />);
    expect(wrapper).toMatchSnapshot();
});