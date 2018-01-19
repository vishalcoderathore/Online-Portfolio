import React from 'react';
import PortfolioEducation from '../../components/PortfolioEducation';
import { shallow } from 'enzyme';

test('should render portfolio dashboard page correctly', () => {
    const wrapper = shallow(<PortfolioEducation />);
    expect(wrapper).toMatchSnapshot();
});