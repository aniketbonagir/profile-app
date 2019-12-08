import React from 'react';
import {
    shallow
} from 'enzyme';
import CharacterChapterInfo from "./CharacterChapterInfo";

describe('Test CharacterChapterInfo', () => {
    let mountedComponent;
    let props = {
        episodeIdList: []
    };
    beforeEach(() => {
        mountedComponent = shallow( <CharacterChapterInfo />);
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });
});