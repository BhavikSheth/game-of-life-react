import chai, { expect } from 'chai';
import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from "enzyme-adapter-react-16";

import HelloWorld from '../src/Hello_World';

configure({ adapter: new Adapter() });


describe("<HelloWorld/>", () => {
  it('renders one <h1> tag', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
