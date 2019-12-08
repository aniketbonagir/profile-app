import React from 'react';
import {
    shallow
} from 'enzyme';
import ProfileCard from "./ProfileCard";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {mockData} from "./MockData";

describe('Test ProfileCard', () => {
    let mountedComponent;
    let props = {
        key: mockData.id,
        data: mockData,
        showModalHandler: () => {},
        updateInfoHandler: () => {}
    };

    beforeEach(() => {
        mountedComponent = shallow(<ProfileCard {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if 1 ProfileImage Component Renders', () => {
        expect(mountedComponent.find(ProfileImage)).toHaveLength(1);
    });

    test('Check if 4 ProfileInfo Components Renders', () => {
        expect(mountedComponent.find(ProfileInfo)).toHaveLength(4);
    });

});