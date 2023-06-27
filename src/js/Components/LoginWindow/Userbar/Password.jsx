/**
 * @license Shikai
 * Password.jsx
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {types, notify} from "../../../Greeter/Notifications";

import {data} from "../../../../lang";

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", active: false};
        this.update = this.update.bind(this);
        if (window.__is_debug != true) {this.auth_event = () => {lightdm.respond(this.state.value); setTimeout(() => {if (!lightdm.is_authenticated) {this.props.failure();}}, 250)};}
    }

    componentDidMount() {if (window.__is_debug != true) {lightdm.show_prompt.connect(this.auth_event);}}
    
    componentWillUnmount() {if (window.__is_debug != true) {lightdm.show_prompt.disconnect(this.auth_event);}}

    update(e) {
        if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Alt', 'Meta', 'Control', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'OS'].includes(e.key)) {
            if (e.which == 13) { //Enter key
                if (window.__is_debug === true) {
                    if (this.state.value == "password") {
                        notify(data.get(this.props.lang, "notifications.logged_in") + " " + this.props.user.username + "!", types.Success); this.props.success();
                    } else {notify(data.get(this.props.lang, "notifications.wrong_password"), types.Error); this.props.failure();}
                } else {lightdm.cancel_authentication(); lightdm.authenticate(this.props.user.username);}
            } else if (e.which == 8 || e.which == 46) { //Backspace key or Supr key
                this.setState({value: this.state.value.slice(0, -1)});
            } else {
                console.log(e.key);
                this.setState({value: this.state.value + e.key});
            }; e.preventDefault();
        }
    }
    
    render() {
        return (<div id="password" disabled={this.props.inactive} tabIndex="0" value={this.state.value} onKeyDown={this.update} onFocus={() => {this.setState({active: true})}} onBlur={() => {this.setState({active: false})}} className={
            cxs({
                color: this.props.color,
                borderTop: this.props.border.top,
                borderBottom: this.props.border.top,
                borderLeft: this.props.border.left,
                borderRight: this.props.border.left,
                borderRadius: this.props.border.radius,
                background: this.props.background,
                minHeight: "calc(1.2em + " + (+this.props.border.top.slice(0, 1) * 2) + "px + 1px)",
                position: "relative",
                "::before": {content: this.state.active ? '"' + this.props.caret.left + '"' : '""'},
                "::after": {content: this.state.active ? '"' + this.props.caret.right + '"' : '""'}
            })
        }>{(this.state.value.length > 14) ? "*".repeat(14) : "*".repeat(this.state.value.length)}</div>);
    }
}

export default connect(
    (state) => {return {
        color: state.settings.style.userbar.password.color,
        border: {
            top: state.settings.style.userbar.password.border.top,
            left: state.settings.style.userbar.password.border.left,
            radius: state.settings.style.userbar.password.border.radius
        },
        caret: {
            left: state.settings.style.userbar.password.caret.left,
            right: state.settings.style.userbar.password.caret.right
        },
        background: state.settings.style.userbar.password.background,
        inactive: state.runtime.events.inactivity,
        lang: state.settings.behaviour.language,
        user: state.runtime.user
    };},
    (dispatch) => {return {
        success: () => {dispatch({type: "Start_Event", key: "loginSuccess"});},
        failure: () => {dispatch({type: "Start_Event", key: "loginFailure"});}
    };}
)(Password);