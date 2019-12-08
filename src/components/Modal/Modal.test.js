import React from 'react';
import {
    shallow
} from 'enzyme';
import Modal from "./Modal";
import FragHoc from "../../hoc/FragHoc/FragHoc";
import Backdrop from "../Backdrop/Backdrop";

describe('Test Modal', () => {
    let mountedComponent;
    let props = {
        show: true,
        modalClosed: () => {}
    };

    beforeEach(() => {
        mountedComponent = shallow(<Modal {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if 1 FragHoc Component Renders', () => {
        expect(mountedComponent.find(FragHoc)).toHaveLength(1);
    });
    
    test('Check if 1 Backdrop Component Renders', () => {
        expect(mountedComponent.find(Backdrop)).toHaveLength(1);
    });
});