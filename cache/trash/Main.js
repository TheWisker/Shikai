import "../css/scss/style.scss";

import React from "react";
import ReactDOM from "reactdom";

import { Provider } from "react-redux";

import Environment from "./Core/Environment";

import LoginWindow from "./Components/LoginWindow";

export default function launch() {
    Environment.launch(); //Launchs the environment class

    ReactDOM.render(React.createElement(
        Provider,
        { store: Environment.curent.getStore },
        React.createElement(LoginWindow, null)
    ), document.getElementById("loginroot"));

    document.getElementById("password").focus();
};

window.onload = function () {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", function () {
            launch();
        });
    } else {
        launch();
    }
};