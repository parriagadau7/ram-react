import React from 'react';
import {shallow} from "enzyme";
import {CharacterContainer} from "./CharacterContainer";
import {characters} from "../action/charactersJson";

const props = {characters: characters.results, listCharacters:jest.fn()};

describe('CharacterContainer', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<CharacterContainer {...props} />);
    });

    it('llamado a props listImages en componentDidMount', ()=> {
        expect(props.listCharacters.mock.calls.length).toBe(1);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });
});
