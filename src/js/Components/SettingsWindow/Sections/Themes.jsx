import React from "react";
import {connect} from "react-redux";

import {types, notify} from "../../../Greeter/Notifications"
import * as Inputs from "./Inputs";

class Theme extends React.Component {
    render() {
        return (
            <div className="theme">
                {this.props.name}
                <div className="expand"/>
                <div className="button" onClick={() => {notify("Theme " + this.props.name + " activated!", types.Success); this.props.func(this.props.index, "Theme_Activate")}}>Use</div>
                <div className="button" onClick={() => {notify("Theme " + this.props.name + " removed!", types.Success); this.props.func(this.props.index, "Theme_Remove")}}>Remove</div>
            </div>
        );
    }
}

class Themes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {new_name: "Theme_" + (props.themes.length + 1)};
    }

    render() {
        let array = [];
        this.props.themes.forEach((theme, i) => {array[i] = <Theme name={theme.name} index={i} func={(index, action) => {this.props.theme_action(index, action)}} key={theme.name}/>});
        return (
            <React.Fragment>
                <div className="section">
                    <div className="text title">Current</div>
                    <Inputs.Textarea name="Name:" value={this.state.new_name} action={(name) => {this.setState({new_name: name});}}/>
                    <div className="text button" onClick={() => {notify("Theme " + this.state.new_name + " added!", types.Success); this.props.add(this.state.new_name)}}>Save</div>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">Saved</div>
                    {array}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {return {themes: state.themes};},
    (dispatch) => {return {add: (name) => {dispatch({type: "Theme_Add", value: name})}, theme_action: (index, action) => {dispatch({type: action, key: index})}}}
)(Themes);