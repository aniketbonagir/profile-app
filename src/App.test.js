import React from 'react';
import { shallow } from "enzyme";
import App from './App';

describe("renders Page", () => {
  let mountedComponent;
  beforeEach(() => {
    mountedComponent = shallow(<App />);
  });
  test("Should Render Successfully", () => {
    expect(mountedComponent.exists()).toBe(true);
  });
});