import "../css/style.scss";

import React from "react";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import Store from "./Redux/Store";
import LoginWindow from "./Components/LoginWindow";
import SettingsWindow from "./Components/SettingsWindow";

export default function launch() {
    const store = Store();

    createRoot(document.getElementById("loginroot")).render((
        <Provider store={store}>
            <LoginWindow/>
        </Provider>
    ));

    createRoot(document.getElementById("settingroot")).render((
        <Provider store={store}>
            <SettingsWindow/>
        </Provider>
    ));
};

window.onload = () => {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", () => {launch();});
    } else {launch();}
}