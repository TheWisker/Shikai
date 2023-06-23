/**
 * @license Shikai
 * Userbar/index.jsx
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import Avatar from "./Avatar";
import Username from "./Username";
import Password from "./Password"
import Session from "./Session";
import Switch from "./Switch";
import Date from "./Date";

import Drag from "../../../../assets/drag.svg";

class Userbar extends React.Component {
    componentDidMount() {document.getElementById("password").focus();}

    render() {
        return (<div className={"userbar " + cxs({background: `linear-gradient(${this.props.background.top} 0%, ${this.props.background.bottom} 100%)`})}>
            <div id="login_handle" onDoubleClick={() => {this.props.action()}}>
                <Drag/>
            </div>
            <Avatar/>
            <Username/>
            <form className="expand" onSubmit={(e) => {e.preventDefault()}}>
                <div className="mainbar">
                    <Password/>
                    <Session/>
                </div>
            </form>
            <div className="bottombar">
                <Switch/>
                <div className="expand"/>
                <Date/>
            </div>
        </div>)
    }
}

export default connect(
    (state) => {return {
        background: {
            top: state.settings.style.userbar.background.top,
            bottom: state.settings.style.userbar.background.bottom
        },
        color: state.settings.style.main.textcolor
    };}
)(Userbar);