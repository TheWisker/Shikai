import "../css/style.scss";

import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";

import Environment from "./Core/Environment";

import LoginWindow from "./Components/LoginWindow";

export default function launch() {
    Environment.launch(); //Launchs the environment class

    ReactDOM.render((
        <Provider store={Environment.current.getStore}>
            <LoginWindow/>
        </Provider>
    ), document.getElementById("loginroot"));

    document.getElementById("password").focus();
};

window.onload = () => {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", () => {launch();});
    } else {launch();}
}