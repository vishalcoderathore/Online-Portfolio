import React from 'react';
import { shallow } from 'enzyme';
import PortfolioProjects_Modals from '../../components/PortfolioProjects_Modals';

test('should render portfolio work correctly', () => {
    const wrapper = shallow(<PortfolioProjects_Modals />);
    expect(wrapper).toMatchSnapshot();
});