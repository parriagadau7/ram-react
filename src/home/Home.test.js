import React from 'react';
import {shallow} from "enzyme";
import Home from "./Home";

describe('Home', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Home/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });

    it('se comprueba redenderizado de elementos', ()=> {
        expect(wrapper.find('.cover-heading').text()).toEqual('Rick and Morty.');
    });
});
