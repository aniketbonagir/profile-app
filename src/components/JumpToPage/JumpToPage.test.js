import React from 'react';
import {
    shallow
} from 'enzyme';

import JumpToPage from "./JumpToPage";

describe('Test CharacterInfo',() => {
    let mountedComponent;
    let props = {
        page: 2,
        onPageChage: () => {},
        updatePage: () => {}
    };
    beforeEach(() => {
        mountedComponent = shallow( <JumpToPage {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if 1 input Renders', () => {
        expect(mountedComponent.find('.ct-input')).toHaveLength(1);
    });

    test('Check if 1 Button Renders', () => {
        expect(mountedComponent.find('.ct-button')).toHaveLength(1);
    });
});