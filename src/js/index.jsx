import "../assets/index.yml";
import "../css/style.scss";

import React from "react";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import Store from "./Redux/Store";
import LoginWindow from "./Components/LoginWindow";
import SettingsWindow from "./Components/SettingsWindow";

import * as Operations from "./Greeter/Operations";
import {types, notify} from "./Greeter/Notifications";
import Idle from "./Greeter/Idle";

function launch() {

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

    const idle = new Idle((t) => {store.dispatch(t)}); //Listens for idle event

    //console.log(store.getState(), "Default");

    idle.changeTimeout(store.getState().settings.behaviour.idle.timeout);
    if (store.getState().settings.behaviour.idle.enabled) {idle.start();}

    let idle_enabled = store.getState().settings.behaviour.idle.enabled;
    let idle_timeout;
    let last_event = true;
    let failure_timeout;
    store.subscribe((e) => {
        //console.log(e, store.getState(), "Subscription");
        let icons = store.getState().settings.style.main.icons;
        const stylesheet = document.styleSheets[0];
        const changeClassProperty = (selector, property, value) => {
            for(let i = 0; i < stylesheet.cssRules.length; i++) {
                if(stylesheet.cssRules[i].selectorText === selector) {stylesheet.cssRules[i].style.setProperty(property, value); break;}
            }
        }
        changeClassProperty(".SVGBackground", "fill", icons.background);
        changeClassProperty(".SVGPath", "fill", icons.foreground);
        
        const loginroot = document.getElementById("loginroot");
        if (last_event != store.getState().runtime.events.inactivity) {
            if (store.getState().runtime.events.inactivity) {
                loginroot.style.transform = "translate(" + window.innerWidth + "px, 0)";
            } else {
                loginroot.classList.add("notransition");
                loginroot.style.transform = "translate(" + (-window.innerWidth - loginroot.offsetWidth) + "px, 0)";
                loginroot.offsetHeight; //Force reflow
                loginroot.classList.remove("notransition");
                loginroot.style.transform = "translate(0, 0)";
            } last_event = store.getState().runtime.events.inactivity;
        }

        if (!store.getState().runtime.events.inactivity) {
            if (store.getState().runtime.events.loginSuccess) {
                loginroot.style.transform = "scale(0.4)";
                loginroot.style.opacity = "0";
                if (window.__is_debug) {setTimeout(() => {location.reload();}, 1500);}
            } else if (store.getState().runtime.events.loginFailure) {
                loginroot.style.transform = "scale(0.8)";
                clearInterval(failure_timeout);
                failure_timeout = setTimeout(() => {
                    loginroot.style.transform = "scale(1)";
                    store.dispatch({type: "Stop_Event", key: "loginFailure"});
                }, 500);
            }
        }

        if (idle_enabled != store.getState().settings.behaviour.idle.enabled) {
            idle_enabled = store.getState().settings.behaviour.idle.enabled;
            if (idle_enabled) {idle.start();} else {idle.stop();}
        }

        if (idle_timeout != store.getState().settings.behaviour.idle.timeout) {
            idle_timeout = store.getState().settings.behaviour.idle.timeout;
            idle.changeTimeout(idle_timeout);
        }
    });

    if (window.__is_debug) {
        setInterval(() => {
            const tips = [
                "Click on the background to change it!",
                "The password is 'password'!",
                "Hover over the upper-left corner!",
                "Close the settings menu to save the changes!",
                "After 60 seconds of inactivity the theme goes idle!"
            ];
            notify("Hint: " + tips[Math.floor(Math.random() * tips.length)], types.Info);
        }, 10 * 1000);
    }
};

window.onload = () => {
    //window.localStorage.clear();
    if (!window.__is_debug) {
        if (lightdm === undefined) {
            document.addEventListener("GreeterReady", () => {launch();});
        } else {launch();}
    } else {launch();}
}