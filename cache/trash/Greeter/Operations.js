
export function getInitialUser() {
    var _this = this;

    if (window.lightdm.lock_hint) {
        var user = window.lightdm.users.find(function (user) {
            return user.logged_in;
        });
        if (user != undefined) {
            return user;
        }
    }

    if (this.settings.getSetting("defaultUser")) {
        var _user = window.lightdm.users.find(function (user) {
            return user.name === _this.settings.getSetting("defaultUser");
        });
        if (_user != undefined) {
            return _user;
        }
    }

    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
        var _user2 = window.lightdm.users.find(function (user) {
            return user.name === window.lightdm.select_user_hint;
        });
        if (_user2 != undefined) {
            return _user2;
        }
    }

    return window.lightdm.users[0];
}

export function getInitalSession() {
    return this.findSession(this.user.session) || this.findSession(window.lightdm.default_session) || window.lightdm.sessions[0];
}

export function findSession(name) {
    if (name === undefined || name === null) {
        return false;
    }
    return window.lightdm.sessions.find(function (session) {
        return session.name.toLowerCase() === name.toLowerCase() || session.key.toLowerCase() === name.toLowerCase();
    });
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