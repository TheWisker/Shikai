import "../css/monitor.scss";

import * as Operations from "./Greeter/Operations";

function launch() {
    let wall_callback = (wallpapers) => {
        document.body.onclick = (e) => {
            if (e.target == e.currentTarget) {
                document.body.style.backgroundImage = "url('" + wallpapers[Math.floor(Math.random() * wallpapers.length)] + "')";
            }
        }; document.body.click();
    }
    if (window.__is_debug) {wall_callback(Operations.getWallpapers(Operations.getWallpaperDir()))} else {
        Operations.getWallpapers(Operations.getWallpaperDir(), wall_callback);
    };
}

window.onload = () => {
    if (!window.__is_debug) {
        if (lightdm === undefined) {
            document.addEventListener("GreeterReady", () => {launch();});
        } else {launch();}
    } else {launch();}
}