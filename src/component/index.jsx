import React, {Component} from 'react';
import MainRouter from "./Router/1_router";
import {Provider} from "react-redux";
import './css/main.css'
import './css/Navbar.css'
import store from "./Redux/store";
import {persistor} from './Redux/store'

/* redux-persist  */
import { PersistGate } from 'redux-persist/integration/react'

// console.log(store)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainRouter/>
                </PersistGate>
            </Provider>
        );
    }

}

export default App;