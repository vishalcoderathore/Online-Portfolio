import React from 'react';
import { shallow } from 'enzyme';
import PortfolioProjects from '../../components/PortfolioProjects';

test('should render portfolio work correctly', () => {
    const wrapper = shallow(<PortfolioProjects />);
    expect(wrapper).toMatchSnapshot();
});