import {combineReducers} from "redux";
import characters from "./CharacterReducer";

const rootReducer = combineReducers({
    characters
});

export default rootReducer;
