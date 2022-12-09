var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var _Logo = function (_React$Component) {
    _inherits(_Logo, _React$Component);

    function _Logo() {
        _classCallCheck(this, _Logo);

        return _possibleConstructorReturn(this, (_Logo.__proto__ || Object.getPrototypeOf(_Logo)).apply(this, arguments));
    }

    _createClass(_Logo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "logo" },
                React.createElement("img", { src: this.props.logo })
            );
        }
    }]);

    return _Logo;
}(React.Component);

export default Logo.assemble = function () {
    return React.createElement(_Logo, { logo: "assets/media/arch-logo.png" });
};