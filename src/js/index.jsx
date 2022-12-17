import "../css/style.scss";

import React from "react";
import {createRoot} from 'react-dom/client';

import {Provider} from "react-redux";

//import Environment from "./Core/Environment";
import Store from "./Redux/Store";

import LoginWindow from "./Components/LoginWindow";

export default function launch() {
    //Environment.launch(); //Launchs the environment class
    const root = createRoot(document.getElementById("loginroot"));

    root.render((
        <Provider store={Store()}>
            <LoginWindow/>
        </Provider>
    ));

    
};

window.onload = () => {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", () => {launch();});
    } else {launch();}
}