import Environment from "../Core/Environment";

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
    //let user = Environment.current.getUser();
    //user = user ? user : getInitialUser();
    let user = getInitialUser();
    return (
        findSession(user.session) ||
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
    return "";
}

export function getWallpapers() {
    return "";
}

export function getLogos() {
    return "";
}