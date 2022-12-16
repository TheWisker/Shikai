var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!(typeof Storage === "undefined" ? "undefined" : _typeof(Storage)) !== "undefined") {
    //window.notifications.generate("localStorage not supported. Theme unable to function!", 'error');
    //throw("localStorage not supported. Theme unable to function!");
}

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);
    }

    _createClass(Storage, null, [{
        key: "save",
        value: function save(id, data) {
            localStorage.setItem(id, JSON.stringify(data));
            return true;
        }
    }, {
        key: "get",
        value: function get(id) {
            return JSON.parse(localStorage.getItem(id));
        }
    }]);

    return Storage;
}();

var Entry = function () {
    function Entry(id, def) {
        _classCallCheck(this, Entry);

        this.id = id;
        this.def = def;
        console.log(this.get());
        if (this.get() == null) {
            this.save(this.def);
        }
    }

    _createClass(Entry, [{
        key: "save",
        value: function save(data) {
            return Storage.save(this.id, data);
        }
    }, {
        key: "get",
        value: function get() {
            return Storage.get(this.id);
        }
    }]);

    return Entry;
}();

export default Entry;