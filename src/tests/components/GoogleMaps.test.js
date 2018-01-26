import React from 'react';
import { shallow } from 'enzyme';
import MapWithAMakredInfoWindow from '../../components/GoogleMaps';

test('should render google maps correctly', () => {
    const wrapper = shallow(<MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgM64gpvjKwX3JhihSyRs2pX9N8npMFzI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div ></div>}
        containerElement={<div className="maps--containerElement"></div>}
        mapElement={<div className="maps--mapElement"></div>}
    />);
    expect(wrapper).toMatchSnapshot();
});