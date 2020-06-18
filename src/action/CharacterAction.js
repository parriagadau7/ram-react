import axios from 'axios';
import {LIST_CHARACTER} from "./Constant";

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const listCharacters = (numPage) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/?page=${numPage}`)
            .then(response => {
                dispatch(
                    {
                        type: LIST_CHARACTER,
                        payload: response.data.results
                    }
                )
            })
            .catch(error => {
                throw(error);
            });
    };
};
