import React from 'react';
import './App.css';
import 'library-layout-react/dist/bundle.css';
import {Layout} from "library-layout-react";
import Home from "./home/Home";
import CharacterContainer from "./character/CharacterContainer";
import {Provider} from "react-redux";
import store from "./store/Store";

function App() {
    const links = [{
        name: "Character",
        path: "/character"
    }];

    const routes = [{
        exact: true,
        name: Home,
        path: "/"
    },
        {
            exact: false,
            name: CharacterContainer,
            path: "/character"
        }
    ];
    return (
        <Provider store={store}>
            <Layout links={links} routes={routes}/>
        </Provider>
    );
}

export default App;
