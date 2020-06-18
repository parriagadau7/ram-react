import React, {Component} from "react";
import Character from "./Character";
import {connect} from "react-redux";
import {listCharacters} from "../action/CharacterAction";

export class CharacterContainer extends Component {

    componentDidMount() {
        const valor = Math.floor(Math.random() * 25) + 1;
        console.log("{ImageContainer - componentDidMount}");
        this.props.listCharacters(valor);
    }

    render() {
        console.log("{ImageContainer - render}");
        return (
            <Character characters={this.props.characters}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps,{listCharacters})(CharacterContainer);
