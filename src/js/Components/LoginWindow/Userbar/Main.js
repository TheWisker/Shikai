var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import Avatar from "./Avatar";
import Username from "./Username";
import Session from "./Session";

import Arrow from "../../../../assets/media/icons/arrow.svg";

var _Userbar = function (_React$Component) {
    _inherits(_Userbar, _React$Component);

    function _Userbar() {
        _classCallCheck(this, _Userbar);

        return _possibleConstructorReturn(this, (_Userbar.__proto__ || Object.getPrototypeOf(_Userbar)).apply(this, arguments));
    }

    _createClass(_Userbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "userbar" },
                Avatar.assemble(),
                Username.assemble(),
                React.createElement(
                    "form",
                    null,
                    React.createElement(
                        "div",
                        { "class": "passbar" },
                        React.createElement("input", { id: "password", "class": "password" })
                    ),
                    React.createElement(
                        "div",
                        { "class": "submitbar" },
                        Session.assemble(),
                        React.createElement(
                            "div",
                            { "class": "submitswitch" },
                            React.createElement(Arrow, null)
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "userswitch" },
                    "Switch User"
                )
            );
        }
    }]);

    return _Userbar;
}(React.Component);

export default Userbar.assemble = function () {
    return React.createElement(_Userbar, null);
};