//import Environment from "../Core/Environment";

export function getInitialUser() {
    if (window.lightdm.lock_hint) {
        let user = window.lightdm.users.find((user) => user.logged_in);
        if (user != undefined) {return user;}
    }

    /*if (Environment.current.getSettings().getSetting("defaultUser")) {
        let user = window.lightdm.users.find((user) => user.name === Environment.current.getSettings().getSetting("defaultUser"));    
        if (user != undefined) {return user;}
    }*/

    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
        let user = window.lightdm.users.find((user) => user.name === window.lightdm.select_user_hint);    
        if (user != undefined) {return user;}
    }

    return window.lightdm.users[0];
}

export function getInitialSession() {
    return (
        findSession(getInitialUser().session) ||
        findSession(window.lightdm.default_session) ||
        window.lightdm.sessions[0]
    );
}

export function findSession(name) {
    if (name === undefined || name === null) {return false;}
    return window.lightdm.sessions.find((session) => (session.name.toLowerCase() === name.toLowerCase()) || (session.key.toLowerCase() === name.toLowerCase()));
}

export function getHostname() {
    return window.lightdm.hostname;
}

export function getWallpaperDir() {
    if (window.__debug === true) {return "assets/media/wallpapers/";}

    let dir = window.greeter_config.branding.background_images;
    if (dir == "/usr/share/backgrounds" || dir == "/usr/share/backgrounds/") {dir = "/usr/share/lightdm-webkit/themes/jigoku/src/media/wallpapers/";}
    return dir;
}

export function getWallpapers(dir) {
    if (window.__debug === true) {return ["wallpaper.jpg"];}

    return window.theme_utils.dirlist(dir).map((e) => e.split("/").pop());
}

export function getLogos() {
    if (window.__debug === true) {
        return [
            ["archlinux", "assets/media/logos/archlinux.png"],
            ["ubuntu", "assets/media/logos/ubuntu.png"]
        ];
    }

    return [window.greeter_config.branding.logo, ...window.theme_utils.dirlist("/usr/share/lightdm-webkit/themes/jigoku/src/media/logos/")].map((o) => [o.split("/").pop().replace(/\.[^/.]+$/, ""), o]);
}