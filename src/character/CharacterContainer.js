import React, {useEffect} from "react";
import Character from "./Character";
import {useSelector, useDispatch} from "react-redux";
import {listCharacters} from "../action/CharacterAction";

export const CharacterContainer = () => {

    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("{ImageContainer - useEffect}");
        const valor = Math.floor(Math.random() * 25) + 1;
        dispatch(listCharacters(valor));
    }, [dispatch]);

    return (
        <Character characters={characters}/>
    );
}

export default CharacterContainer;
