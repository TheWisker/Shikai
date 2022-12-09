import "../css/scss/style.scss";

import Components from "./Components"

export default function launch() {
    document.getElementById("password").focus();
    Components.launch();
};

window.onload = () => {
    if (window.lightdm === undefined) {
        document.addEventListener("GreeterReady", () => {launch();});
    } else {launch();}
}