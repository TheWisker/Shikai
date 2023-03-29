import "../css/style.scss";

import React from "react";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import Store from "./Redux/Store";
import LoginWindow from "./Components/LoginWindow";
import SettingsWindow from "./Components/SettingsWindow";

import * as Operations from "./Greeter/Operations";
import Idle from "./Greeter/Idle";

function launch() {
    if (!window.__is_debug) {window.lightdm = lightdm;}

    const store = Store();
    
    let wall_callback = (wallpapers) => {
        document.body.onclick = (e) => {
            if (e.target == e.currentTarget) {
                document.body.style.backgroundImage = "url('" + wallpapers[Math.floor(Math.random() * wallpapers.length)] + "')";
            }
        }; document.body.click();
    }
    if (window.__is_debug) {wall_callback(Operations.getWallpapers(Operations.getWallpaperDir()))} else {
        Operations.getWallpapers(Operations.getWallpaperDir(), wall_callback);
    }; Operations.getLogos(Operations.getLogosDir(), (dt) => store.dispatch({type: "Set_Logos", payload: dt}));

    store.subscribe(() => {
        let icons = store.getState().settings.style.main.icons;
        const stylesheet = document.styleSheets[0];
        const changeClassProperty = (selector, property, value) => {
            for(let i = 0; i < stylesheet.cssRules.length; i++) {
                if(stylesheet.cssRules[i].selectorText === selector) {stylesheet.cssRules[i].style.setProperty(property, value); break;}
            }
        }
        changeClassProperty(".SVGBackground", "fill", icons.background);
        changeClassProperty(".SVGPath", "fill", icons.foreground);
    });

    const idle = new Idle((t) => {store.dispatch(t)}, 6 * 1000); //Listens for idle event

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
    if (!window.__is_debug) {
        if (lightdm === undefined) {
            document.addEventListener("GreeterReady", () => {launch();});
        } else {launch();}
    } else {launch();}
}