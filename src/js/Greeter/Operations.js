export function getInitialUser() {
    if (window.lightdm.lock_hint) {
        let user = window.lightdm.users.find((user) => user.logged_in);
        if (user != undefined) {return user;}
    }
    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
        let user = window.lightdm.users.find((user) => user.name === window.lightdm.select_user_hint);    
        if (user != undefined) {return user;}
    } return window.lightdm.users[0];
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

export function getHostname() {return window.lightdm.hostname;}

export function getWallpaperDir() {
    if (window.__is_debug === true) {return "./assets/media/wallpapers/";}
    return greeter_config.branding.background_images_dir;
}

export function getWallpapers(dir, callback) {
    if (window.__is_debug === true) {
        let defs = ["Wallpaper21.png"]; for (let i = 1; i < 21; i++) {defs.push("Wallpaper" + ((i > 9) ? i : ("0" + i)) + ".jpg");}
        return defs.map((e) => dir + e);
    } theme_utils.dirlist(dir, true, callback);
}

export function getLogosDir() {
    if (window.__is_debug === true) {return "./assets/media/logos/";}
    return greeter_config.branding.logo_image;
}

export function getLogos(dir, callback) {
    if (window.__is_debug === true) {
        return [
            ["archlinux", "./assets/media/logos/archlinux.png"],
            ["ubuntu", "./assets/media/logos/ubuntu.png"]
        ];
    } theme_utils.dirlist(dir, true, (r) => {callback(r.map((o) => [o.split("/").pop().replace(/\.[^/.]+$/, ""), o]))});
}

export function getUserImage(user) {
    if (window.__is_debug === true) {return "./assets/media/profile.jpg"}
    return user.image || greeter_config.branding.user_image;
}