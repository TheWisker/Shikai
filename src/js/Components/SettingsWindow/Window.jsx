/**
 * @license Shikai
 * Window.jsx
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Draggable from "react-draggable";

import Sectionbar from "./Sectionbar";

import Behaviour from "./Sections/Behaviour";
import Style from "./Sections/Style";
import Themes from "./Sections/Themes";

const window_width = 520;

export default class Window extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem("SettingsDrag")) {localStorage.setItem("SettingsDrag", JSON.stringify({x: 0, y: 0}))}
        this.state = {display: "behaviour", data: JSON.parse(localStorage.getItem("SettingsDrag"))};
        this.update = this.update.bind(this);
        this.dragEvent = this.dragEvent.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    update(tab) {this.setState({display: tab});}

    dragEvent(_, _data) {this.setState({data: {x: _data.x, y: _data.y}});}

    dragStop(_, data) {localStorage.setItem("SettingsDrag", JSON.stringify({x: data.x, y: data.y}));}

    render() {
        let tab;
        let classes = ["settingwindow"];
        if (this.state.data.x == 0) {classes.push("origin_left");}
        if (this.state.data.x == screen.availWidth - window_width) {classes.push("origin_right");}
        switch(this.state.display) {
            case "themes": tab = <Themes/>; break;
            case "style": tab = <Style/>; break;
            default: tab = <Behaviour/>; break;
        } let t = (this.props.active) ? null : ("translate(" + (((this.state.data.x + (window_width/2)) <= (screen.availWidth/2)) ? (-(this.state.data.x + window_width)) : (screen.availWidth - this.state.data.x)) + "px, 0px)");
        return (<Draggable axis="x" disabled={!this.props.active} handle="#settings_handle" bounds={{left: 0, right: screen.availWidth - window_width, top: 0, bottom: 0}} position={this.state.data} onDrag={this.dragEvent} onStop={this.dragStop}>
            <div id="settings_drag">
                <div className={classes.join(" ")} style={{transform: t}}>
                    <Sectionbar action={(a) => this.update(a)} callback={this.props.callback} reset={() => {
                        document.getElementById("settings_drag").style.transition = "transform 400ms";
                        this.dragEvent(null, {x: 0, y: 0}); this.dragStop(null, {x: 0, y: 0});
                        setTimeout(() => {document.getElementById("settings_drag").style.transition = "";}, 400);
                    }}/>
                    <div className="displaybar">{tab}</div>
                </div>
            </div>
        </Draggable>);
    }
}