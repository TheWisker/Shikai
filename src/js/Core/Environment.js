
import * as Settings from "../Greeter/Settings";

import * as Operations from "../Greeter/Operations";

import Store from "../Redux/Store";

export default class Environment {
    static current;

    constructor() {
        this.store = Store();
        this.walldir = Operations.getWallpaperDir();
        this.wallpapers = Operations.getWallpapers();
        this.logos = Operations.getLogos();
    }

    static launch() {
        Environment.current = new Environment();
        return Environment.current;
    }

    getStore() {return this.store;}

    setUser(user) {
        this.user = user; //Check if exists!!!
        return true;
    }

    getUser() {return this.user;}

    setSession(session) {
        this.session = session; //Check if exists!!!
        return true;
    }

    getSession() {return this.session;}

    getHostname() {return this.hostname;}

    getWalldir() {return this.walldir;}

    getWallpapers() {return this.wallpapers;}

    getLogos() {return this.logos;}
}