import {LIST_CHARACTER} from "../action/Constant";


export default function characterReducer(state = [], action) {
    switch (action.type) {
        case LIST_CHARACTER:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
