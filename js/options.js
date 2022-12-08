var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//function window.lightdm.can_suspend ? ae("Suspending system.", window.lightdm.suspend) : window.notifications.generate("".concat(e, " is disabled on this system."), "error")


import ReactLogo from '../assets/media/buttons/reboot.svg';

var Option = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option(props) {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "option" },
                React.createElement(
                    "div",
                    { "class": "icon" },
                    React.createElement(ReactLogo, null)
                ),
                React.createElement(
                    "div",
                    { "class": "text" },
                    this.props.name
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var domContainer = document.getElementById("options");

//let reb = (<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="95px" height="94.964px" viewBox="264.14 221.317 95 94.964" enable-background="new 264.14 221.317 95 94.964" xml:space="preserve"><path stroke="currentColor" stroke-width="1px" d="M357.133,255.171c-5.879-19.633-24.02-33.854-45.493-33.854c-26.233,0-47.5,21.242-47.5,47.476c0,26.234,21.267,47.488,47.5,47.488s47.5-21.224,47.5-47.458c0-1.568-0.078-3.257-0.227-4.605h-5.393c0.167,1.348,0.256,3.028,0.256,4.599c0,23.271-18.865,42.113-42.137,42.113s-42.137-18.877-42.137-42.149s18.866-42.143,42.137-42.143c14.922,0,28.031,7.756,35.517,19.458l-15.188,0.005l18.711,6.839"/></svg>);
//let reb = (<img src="assets/media/buttons/reboot.svg"/>);


ReactDOM.render(React.createElement(Option, { name: "REBOOT" }), domContainer);