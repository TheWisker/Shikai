/**
 * @license Shikai
 * Operations.js
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function getInitialUser() {
    // If greeter was started as lock screen initial user must be already logged in
    if (lightdm.lock_hint) {
        let user = lightdm.users.find((user) => {return user.logged_in;});
        if (user != undefined) {return user;}
    }
    // If greeter has default user use it
    if (greeter_config) {
        if (greeter_config.greeter.default_user != undefined && greeter_config.greeter.default_user != null) {
            let user = lightdm.users.find((user) => user.username == greeter_config.greeter.default_user);    
            if (user != undefined) {return user;}
        } 
    }
    // If greeter has selected user hint use it
    if (lightdm.select_user_hint != undefined && lightdm.select_user_hint != null) {
        let user = lightdm.users.find((user) => user.username == lightdm.select_user_hint);    
        if (user != undefined) {return user;}
    }
    // As fallback use first user
    return lightdm.users[0];
}

export function getInitialSession() {
    return (
        findSession(getInitialUser().session) ||
        findSession(greeter_config ? greeter_config.greeter.default_session : null) ||
        findSession(lightdm.default_session) ||
        lightdm.sessions[0]
    );
}

export function findSession(name) {
    if (name == undefined || name == null) {return false;}
    return lightdm.sessions.find((session) => (session.name.toLowerCase() == name.toLowerCase()) || (session.key.toLowerCase() === name.toLowerCase()));
}

export function getHostname() {return lightdm.hostname;}

export function getWallpaperDir() {
    if (window.__is_debug === true) {return "./assets/media/wallpapers/";}
    return greeter_config.branding.background_images_dir;
}

export function getWallpapers(dir, callback) {
    if (window.__is_debug === true) {
        let defs = [];
        for (let i = 1; i < 12; i++) {defs.push("Wallpaper" + ((i > 9) ? i : ("0" + i)) + "." + ((i > 10) ? "png" : "jpg"));}
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
            ["ubuntu", "./assets/media/logos/ubuntu.png"],
            ["antergos", "./assets/media/logos/antergos.png"],
            ["debian", "./assets/media/logos/debian.png"],
            ["tux", "./assets/media/logos/tux.png"]
        ];
    } theme_utils.dirlist(dir, true, (r) => {callback(r.map((o) => [o.split("/").pop().replace(/\.[^/.]+$/, ""), o]))});
}

export function getUserImage(user) {
    if (window.__is_debug === true) {return "./assets/media/profile.jpg"}
    return user.image || greeter_config.branding.user_image;
}