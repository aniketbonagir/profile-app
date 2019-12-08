import React from 'react';
import {
    shallow
} from 'enzyme';
import PageButton from "./Button";

describe('Test PageButton for Disabled Button', () => {
    let mountedComponent;
    let props = {
        handler: () => {},
        path: "",
        name: "Previous"
    };

    beforeEach(() => {
        mountedComponent = shallow( <PageButton {...props} />)
    })

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if PageButton Renders as Disabled', () => {
        expect(mountedComponent.find(".button-disabled")).toHaveLength(1);
    });

});

describe('Test PageButton for Active Button', () => {
    let mountedComponent;
    let props = {
        handler: () => {},
        path: "https://rickandmortyapi.com/api/character/?page=2",
        name: "Next"
    };

    beforeEach(() => {
        mountedComponent = shallow(<PageButton {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if PageButton Renders is Enabled', () => {
        expect(mountedComponent.find(".base-button")).toHaveLength(1);
    });

});