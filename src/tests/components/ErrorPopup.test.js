import React from 'react';
import { shallow } from 'enzyme';
import ErrorPopup from '../../components/ErrorPopup';

test('should render Loading Page correctly', () => {
    const wrapper = shallow(<ErrorPopup />);
    expect(wrapper).toMatchSnapshot();
});