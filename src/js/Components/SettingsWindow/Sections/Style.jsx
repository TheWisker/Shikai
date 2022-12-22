import React from "react";
import {connect} from "react-redux";

import * as Inputs from "./Inputs";
import Logo from "../../LoginWindow/Sidebar/Logo";

class Style extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="section">
                    <div className="text title">Logo</div>
                    <Logo/>
                    <Inputs.Dropmenu items={this.props.logos.map(o => {return {label: o[0], value: o[1]}})} action={(s) => this.props.set("sidebar.logo", s)} value={this.props.style.sidebar.logo.split("/").pop().replace(/\.[^/.]+$/, "")}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name="Avatar color" action={(c) => this.props.set("userbar.avatar.color", c)} color={this.props.style.userbar.avatar.color}/>
                    <Inputs.Colorpicker name="Text color" action={(c) => this.props.set("main.textcolor", c)} color={this.props.style.main.textcolor}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name="Sidebar color" action={(c) => this.props.set("sidebar.background", c)} color={this.props.style.sidebar.background}/>
                    <Inputs.Colorpicker name="Userbar top color" action={(c) => this.props.set("userbar.background.top", c)} color={this.props.style.userbar.background.bottom}/>
                    <Inputs.Colorpicker name="Userbar bottom color" action={(c) => this.props.set("userbar.background.bottom", c)} color={this.props.style.userbar.background.top}/>
                </div>
                <div className="colorsbar">
                    <Inputs.Colorpicker name="Session text color" action={(c) => this.props.set("userbar.session.color", c)} color={this.props.style.userbar.session.color}/>
                    <Inputs.Colorpicker name="Session background color" action={(c) => this.props.set("userbar.session.background", c)} color={this.props.style.userbar.session.background}/>
                </div>

                <div className="colorsbar">
                    <Inputs.Colorpicker name="Password text color" action={(c) => this.props.set("userbar.password.color", c)} color={this.props.style.userbar.password.color}/>
                    <Inputs.Colorpicker name="Password background color" action={(c) => this.props.set("userbar.password.background", c)} color={this.props.style.userbar.password.background}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">Misc</div>
                    <Inputs.Textarea name="Password top and bottom border" action={(b) => this.props.set("userbar.password.border.top", b)} value={this.props.style.userbar.password.border.top}/>
                    <Inputs.Textarea name="Password left and right border" action={(b) => this.props.set("userbar.password.border.left", b)} value={this.props.style.userbar.password.border.left}/>
                    <Inputs.Textarea name="Password border radius" action={(b) => this.props.set("userbar.password.border.radius", b)} value={this.props.style.userbar.password.border.radius}/>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {
        return {
            style: state.settings.style,
            logos: state.runtime.logos
        };
    },
    (dispatch) => {
        return {
            set: (key, value) => {dispatch({type: "Setting_Set", key: "style." + key, value: value})},
            toggle: (key) => {dispatch({type: "Setting_Toggle", key: "style." + key})}
        }
    }
)(Style);