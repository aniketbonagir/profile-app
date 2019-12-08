import React from 'react';
import {shallow} from 'enzyme';
import ProfileInfo from "./ProfileInfo";


describe('Test ProfileInfo', () => {
    let mountedComponent;
    let props = {
        label: "name",
        value: "Goku",
        key: "name"
    };
    beforeEach(() => {
        mountedComponent = shallow(<ProfileInfo {...props} />);
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if the Label Renders and has correct label', () => {
        let lableCmp = mountedComponent.find('.label');
        expect(lableCmp).toHaveLength(1);
        expect(lableCmp.contains("Name")).toBe(true);
    });

    test('Check if the Value Renders and has correct value', () => {
        let lableCmp = mountedComponent.find('.value');
        expect(lableCmp).toHaveLength(1);
        expect(lableCmp.contains("Goku")).toBe(true);
    });
})