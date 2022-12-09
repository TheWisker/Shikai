import "../css/scss/style.scss";

import Components from "./Components";

export default function launch() {
    document.getElementById("password").focus();
    Components.launch();
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