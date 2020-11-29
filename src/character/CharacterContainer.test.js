import React from 'react';
import {shallow} from "enzyme";
import {CharacterContainer} from "./CharacterContainer";
import {characters} from "../action/charactersJson";
import {useDispatch, useSelector} from "react-redux";

const props = {characters: characters.results, listCharacters:jest.fn()};

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('CharacterContainer', () => {

    let wrapper;

    beforeEach(()=> {
        useSelector.mockImplementation((selector) => selector({
            characters: characters.results,
        }));
        wrapper = shallow(<CharacterContainer />);
    });

    it('llamado a props listImages en componentDidMount', ()=> {
        expect(useDispatch.mock.calls.length).toBe(1);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });
});
