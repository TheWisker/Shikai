import "../css/scss/style.scss";

import ComponentsLaunch from "./Components"

export default function launch() {
    ComponentsLaunch();
    document.getElementById("password").focus();
};

window.onload = () => {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", () => {launch();});
    } else {launch();}
}