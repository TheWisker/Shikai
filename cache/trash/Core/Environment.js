var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import * as Settings from "../Greeter/Settings";

import * as Operations from "../Greeter/Operations";

import Store from "../Redux/Store";

var Environment = function () {
    function Environment() {
        _classCallCheck(this, Environment);

        this.store = Store();
        this.user = Operations.getInitialUser();
        this.session = Operations.getInitalSession();
        this.hostname = Operations.getHostname();
        this.walldir = Operations.getWallpaperDir();
        this.wallpapers = Operations.getWallpapers();
        this.logos = Operations.getLogos();
        //this.settings = new Settings();
    }

    _createClass(Environment, [{
        key: "getStore",
        value: function getStore() {
            return this.store;
        }
    }, {
        key: "setUser",
        value: function setUser(user) {
            this.user = user; //Check if exists!!!
            return true;
        }
    }, {
        key: "getUser",
        value: function getUser() {
            return this.user;
        }
    }, {
        key: "setSession",
        value: function setSession(session) {
            this.session = session; //Check if exists!!!
            return true;
        }
    }, {
        key: "getSession",
        value: function getSession() {
            return this.session;
        }
    }, {
        key: "getHostname",
        value: function getHostname() {
            return this.hostname;
        }
    }, {
        key: "getWalldir",
        value: function getWalldir() {
            return this.walldir;
        }
    }, {
        key: "getWallpapers",
        value: function getWallpapers() {
            return this.wallpapers;
        }
    }, {
        key: "getLogos",
        value: function getLogos() {
            return this.logos;
        }
    }], [{
        key: "launch",
        value: function launch() {
            Environment.current = new Environment();
            return Environment.current;
        }
    }]);

    return Environment;
}();

export default Environment;