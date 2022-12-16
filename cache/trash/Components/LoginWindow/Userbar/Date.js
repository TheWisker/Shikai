var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import format from "../../../Tools/Formatter";

var _Date = function (_React$Component) {
    _inherits(_Date, _React$Component);

    function _Date(props) {
        _classCallCheck(this, _Date);

        var _this = _possibleConstructorReturn(this, (_Date.__proto__ || Object.getPrototypeOf(_Date)).call(this, props));

        _this.state = { running: false, date: "__/__/__" };
        return _this;
    }

    _createClass(_Date, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.update();
            setInterval(function () {
                _this2.update();
                _this2.setState({ running: true });
            }, 60000);
        }
    }, {
        key: "update",
        value: function update() {
            this.setState({ date: format(new Date(), this.props.format) });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "text" },
                this.state.date
            );
        }
    }]);

    return _Date;
}(React.Component);

export default _Date;