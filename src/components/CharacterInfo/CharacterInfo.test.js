import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    mockData
} from "../ProfileCard/MockData";
import CharacterInfo from "./CharacterInfo";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

describe('Test CharacterInfo', () => {
    let mountedComponent;
    let props = {
        data: mockData
    };
    beforeEach(() => {
        mountedComponent = shallow( <CharacterInfo {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if 8 ProfileInfo Component Renders', () => {
        expect(mountedComponent.find(ProfileInfo)).toHaveLength(8);
    });
});