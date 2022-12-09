var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import { shutdown, restart, sleep, hibernate } from "../../../Greeter/Commands";

import Shutdown from "../../../../assets/media/commands/shutdown.svg";
import Restart from "../../../../assets/media/commands/reboot.svg";
import Sleep from "../../../../assets/media/commands/sleep.svg";
import Hibernate from "../../../../assets/media/commands/hibernate.svg";

window.lightdm = { // Debug
    "can_hibernate": true,
    "can_restart": false,
    "can_shutdown": true,
    "can_suspend": true
};

var options = [{ text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown }, { text: "restart", icon: Restart, func: restart, bool: window.lightdm.can_restart }, { text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend }, { text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate }];

var Option = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "option", onClick: this.props.func },
                React.createElement(
                    "div",
                    { "class": "icon" },
                    this.props.icon
                ),
                React.createElement(
                    "div",
                    { "class": "text" },
                    this.props.text
                )
            );
        }
    }]);

    return Option;
}(React.Component);

export default Options.assemble = function () {
    var array = [];
    options.filter(function (option) {
        return option.bool;
    }).forEach(function (option, i) {
        array[i] = React.createElement(Option, { text: option.text, func: option.func, icon: React.createElement(option.icon, null) });
    });
    return React.createElement(
        "div",
        null,
        array
    );
};