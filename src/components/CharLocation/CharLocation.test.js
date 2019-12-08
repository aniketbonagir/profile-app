import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    mockData
} from "../ProfileCard/MockData";
import CharLocation from "./CharLocation";

describe('Test CharLocation', () => {
    let mountedComponent;
    let props = {
        apiUrl: mockData.location.url
    };

    beforeEach(() => {
        mountedComponent = shallow(<CharLocation {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });    
});
