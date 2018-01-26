import React from 'react';
import { shallow } from 'enzyme';
import PortfolioContactForm from '../../components/PortfolioContactForm';
import {userData} from '../fixtures/dumyUser';

beforeEach(() => {
    var fName = document.createElement("INPUT");
    fName.setAttribute("type", "text");
    fName.setAttribute("value", "Test Value");
    fName.setAttribute("id", "fName");
    document.body.appendChild(fName);

    var lName = document.createElement("INPUT");
    lName.setAttribute("type", "text");
    lName.setAttribute("value", "Test Value");
    lName.setAttribute("id", "lName");
    document.body.appendChild(lName);

    var emailAddress = document.createElement("INPUT");
    emailAddress.setAttribute("type", "text");
    emailAddress.setAttribute("value", "Test Value");
    emailAddress.setAttribute("id", "emailAddress");
    document.body.appendChild(emailAddress);

    var contactNumber = document.createElement("INPUT");
    contactNumber.setAttribute("type", "text");
    contactNumber.setAttribute("value", "Test Value");
    contactNumber.setAttribute("id", "contactNumber");
    document.body.appendChild(contactNumber);

    var msg = document.createElement("TEXTAREA");
    msg.setAttribute("type", "text");
    msg.setAttribute("value", "Test Value");
    msg.setAttribute("id", "msg-area");
    document.body.appendChild(msg);
});

test('should render footer correctly', () => {
    const wrapper = shallow(<PortfolioContactForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error message on invalid form submit', () => {
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.find('ErrorPopup').exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
});

test('should render success message on valid form submit', () => {
    const wrapper = shallow(<PortfolioContactForm   {...userData[0]}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
     expect(wrapper.find('SuccessPopup').exists()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
});

test('should set first name on input change', () => {
    const value = 'Test First Name';
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('fName')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set last name on input change', () => {
    const value = 'Test Last Name';
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('lName')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set email on input change', () => {
    const value = 'Test Email';
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set contact number on input change', () => {
    const value = 'Test Contact Number';
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('contactNum')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set message on input change', () => {
    const value = 'Test Message';
    const wrapper = shallow(<PortfolioContactForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('message')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});