/**
 * @license Shikai
 * Sectionbar/index.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {connect} from "react-redux";

import Drag from "../../../../assets/drag.svg";
import Image from "../../../../assets/close.svg";

import {data} from "../../../../lang";

class Sectionbar extends React.Component {
    render() {
        return (<div className="sectionbar">
            <div id="settings_handle" onDoubleClick={() => {this.props.reset()}}>
                <Drag/>
            </div>
            <div className="text button" onClick={this.props.action}>{data.get(this.props.lang, "settings.behaviour.name")}</div>
            <div className="text button" onClick={() => this.props.action("style")}>{data.get(this.props.lang, "settings.style.name")}</div>
            <div className="text button" onClick={() => this.props.action("themes")}>{data.get(this.props.lang, "settings.themes.name")}</div>
            <div className="button" onClick={this.props.callback}>
                <Image/>
            </div>
        </div>);
    }
}

export default connect((state) => {return {lang: state.settings.behaviour.language};})(Sectionbar);