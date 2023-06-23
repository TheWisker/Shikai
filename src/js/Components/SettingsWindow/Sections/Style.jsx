/**
 * @license Shikai
 * Style.jsx
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";

import * as Inputs from "./Inputs";
import Logo from "../../LoginWindow/Sidebar/Logo";

import {data} from "../../../../lang";

class Style extends React.Component {
    render() {
        return (<React.Fragment>
            <div style={{paddingBottom: "25px"}}>
                <div className="section">
                    <div className="text title">{data.get(this.props.lang, "settings.style.sections.main.name")}</div>
                    <Logo/>
                    <Inputs.Dropmenu items={this.props.logos.map(o => {return {label: o[0], value: o[1]}})} action={(s) => this.props.set("sidebar.logo", s)} value={this.props.style.sidebar.logo.split("/").pop().replace(/\.[^/.]+$/, "")}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.avatar")} action={(c) => this.props.set("userbar.avatar.color", c)} color={this.props.style.userbar.avatar.color}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.text")} action={(c) => this.props.set("main.textcolor", c)} color={this.props.style.main.textcolor}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.sidebar")} action={(c) => this.props.set("sidebar.background", c)} color={this.props.style.sidebar.background}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.userbar_top")} action={(c) => this.props.set("userbar.background.top", c)} color={this.props.style.userbar.background.bottom}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.userbar_bottom")} action={(c) => this.props.set("userbar.background.bottom", c)} color={this.props.style.userbar.background.top}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.session_text")} action={(c) => this.props.set("userbar.session.color", c)} color={this.props.style.userbar.session.color}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.session_background")} action={(c) => this.props.set("userbar.session.background", c)} color={this.props.style.userbar.session.background}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.password_text")} action={(c) => this.props.set("userbar.password.color", c)} color={this.props.style.userbar.password.color}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.password_background")} action={(c) => this.props.set("userbar.password.background", c)} color={this.props.style.userbar.password.background}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.icon_background")} action={(c) => this.props.set("main.icons.background", c)} color={this.props.style.main.icons.background}/>
                    <Inputs.Colorpicker name={data.get(this.props.lang, "settings.style.sections.main.options.icon_foreground")} action={(c) => this.props.set("main.icons.foreground", c)} color={this.props.style.main.icons.foreground}/>
                </div>

                <div className="section">
                    <div className="separator"/>
                    <div className="text title">{data.get(this.props.lang, "settings.style.sections.misc.name")}</div>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.style.sections.misc.options.vertical")} action={(b) => this.props.set("userbar.password.border.top", b)} value={this.props.style.userbar.password.border.top}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.style.sections.misc.options.horizontal")} action={(b) => this.props.set("userbar.password.border.left", b)} value={this.props.style.userbar.password.border.left}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.style.sections.misc.options.password")} action={(b) => this.props.set("userbar.password.border.radius", b)} value={this.props.style.userbar.password.border.radius}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.style.sections.misc.options.session")} action={(b) => this.props.set("userbar.session.radius", b)} value={this.props.style.userbar.session.radius}/>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default connect(
    (state) => {return {
        style: state.settings.style,
        lang: state.settings.behaviour.language,
        logos: state.runtime.logos
    };},
    (dispatch) => {return {
        set: (key, value) => {dispatch({type: "Setting_Set", key: "style." + key, value: value})},
        toggle: (key) => {dispatch({type: "Setting_Toggle", key: "style." + key})}
    };}
)(Style);