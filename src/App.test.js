import React from 'react';
import App from './App';
import {shallow} from "enzyme";

describe('App', () => {

  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<App/>);
  });

  it('se genera sin errores', ()=> {
    expect(wrapper).toBeDefined();
  });
});