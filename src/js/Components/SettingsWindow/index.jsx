/**
 * @license Shikai
 * SettingsWindow/index.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";

import Evoker from "./Evoker";
import Window from "./Window";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.toggle = this.toggle.bind(this);
        props.update();
    }

    toggle() {this.setState({active: !this.state.active}); this.props.save();}

    render() {
        return (<React.Fragment>
            <Evoker callback={this.toggle}/>
            <Window callback={this.toggle} active={this.state.active && (!this.props.inactive)}/>
        </React.Fragment>);
    }
}

export default connect(
    (state) => {return {inactive: state.runtime.events.inactivity}},
    (dispatch) => {return {
        save: () => {dispatch({type: "Settings_Save"})},
        update: () => {dispatch({type: "Settings_Update"})}
    }}
)(Settings);