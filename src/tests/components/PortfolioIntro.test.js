import React from 'react';
import PortfolioIntro from '../../components/PortfolioIntro';
import { shallow } from 'enzyme';

test('should render portfolio dashboard page correctly', () => {
    const wrapper = shallow(<PortfolioIntro />);
    expect(wrapper).toMatchSnapshot();
});