import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from "moxios";
import {listCharacters} from "./CharacterAction";
import {characters} from "./charactersJson.js";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('CharacterAction', () => {

    let store;

    beforeEach(() => {
        store = mockStore({});
        moxios.install();
    });

    afterEach(() =>
        moxios.uninstall()
    );

    it('call listCharacters', () => {
        const store = mockStore({});

        moxios.stubRequest("https://rickandmortyapi.com/api/character/?page=2", {
            status: 200,
            response: characters,
        });

        return store.dispatch(listCharacters(2))
            .then(() => {
                expect(store.getActions()[0].payload.length).toBe(20);
            });
    });

});
