import rootReducer from "./Reducers";
import {LIST_CHARACTER} from "../action/Constant";
import {characters} from "../action/charactersJson";

const initialState = {"characters": []};

describe('test for rootReducer', () => {

    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState)
    });

    it('should handle LIST_CHARACTER', () => {
        expect(rootReducer(initialState, {
            type: LIST_CHARACTER,
            payload: characters.results
        }).characters).toEqual(characters.results);
    });

});
