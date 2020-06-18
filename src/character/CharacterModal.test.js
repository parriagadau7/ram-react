import React from 'react';
import {shallow} from "enzyme";
import {characters} from "../action/charactersJson";
import CharacterModal from "./CharacterModal";

describe('CharacterModal', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<CharacterModal character={characters.results[0]}/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });

    it('props empty list characters', ()=> {
        wrapper = shallow(<CharacterModal/>);
        expect(wrapper.find('Col').length).toBe(0);
    });

    it('se comprueba redenderizado de elementos', ()=> {
        expect(wrapper.find('CardImg').at(0).props().src).toEqual(
            'https://rickandmortyapi.com/api/character/avatar/21.jpeg');
    });
});
