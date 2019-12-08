import React from 'react';
import {
    shallow
} from 'enzyme';
import {mockData} from "../ProfileCard/MockData";
import ProfileDetails from "./ProfileDetails";
import Modal from "../Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import CharLocation from "../CharLocation/CharLocation";
import CharacterChapterInfo from "../CharacterChapterInfo/CharacterChapterInfo";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

describe('Test ProfileDetails', () => {
    let mountedComponent;
    let props = {
        showInfoData: mockData,
        closeModal: () => {}
    }

    beforeEach(() => {
        mountedComponent = shallow(<ProfileDetails {...props} />);
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if 1 Modal Component Renders', () => {
        expect(mountedComponent.find(Modal)).toHaveLength(1);
    });

    test('Check if 1 CharacterInfo Component Renders', () => {
        expect(mountedComponent.find(CharacterInfo)).toHaveLength(1);
    });

    test('Check if 8 ProfileInfo Component Renders in CharacterInfo', () => {
        let cmp = mountedComponent.find(CharacterInfo);
        expect(cmp.dive().find(ProfileInfo)).toHaveLength(8);
    });

    test('Check if 1 CharLocation Component Renders', () => {
        expect(mountedComponent.find(CharLocation)).toHaveLength(1);
    });

    test('Check if 1 CharacterChapterInfo Component Renders', () => {
        expect(mountedComponent.find(CharacterChapterInfo)).toHaveLength(1);
    });
});