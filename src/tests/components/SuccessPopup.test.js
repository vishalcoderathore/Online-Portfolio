import React from 'react';
import { shallow } from 'enzyme';
import SuccessPopup from '../../components/SuccessPopup';

test('should render Loading Page correctly', () => {
    const wrapper = shallow(<SuccessPopup />);
    expect(wrapper).toMatchSnapshot();
});