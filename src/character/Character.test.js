import React from 'react';
import {shallow} from "enzyme";
import {characters} from "../action/charactersJson";
import Character from "./Character";

describe('Character', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Character characters={characters.results}/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });

    it('props empty list characters', ()=> {
        wrapper = shallow(<Character characters={[]}/>);
        expect(wrapper.find('Col').length).toBe(0);
    });

    it('se comprueba redenderizado de elementos', ()=> {
        expect(wrapper.find('Col').length).toBe(20);
        expect(wrapper.find('CardImg').at(0).props().src).toEqual(
            'https://rickandmortyapi.com/api/character/avatar/21.jpeg');
    });
});
