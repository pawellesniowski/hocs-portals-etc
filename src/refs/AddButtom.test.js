import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('Add buttom test', () => {
  const component = shallow(<Counter />);
  console.log('component: ', component);
  it('first test', () => {
    expect(true).toBe(true);
  })
});
