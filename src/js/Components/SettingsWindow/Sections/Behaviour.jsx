import React from "react";
import {connect} from "react-redux";

import * as Inputs from "./Inputs";

class Behaviour extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="section">
                    <div className="text title">General</div>
                    <Inputs.Checkbox name="Logo enabled" action={() => this.props.toggle("logo")} value={this.props.behaviour.logo}/>
                    <Inputs.Checkbox name="Hostname enabled" action={() => this.props.toggle("hostname")} value={this.props.behaviour.hostname}/>
                    <Inputs.Checkbox name="Avatar enabled" action={() => this.props.toggle("avatar")} value={this.props.behaviour.avatar}/>
                    <Inputs.Checkbox name="Username enabled" action={() => this.props.toggle("user")} value={this.props.behaviour.user}/>
                    <Inputs.Checkbox name="Session enabled" action={() => this.props.toggle("session")} value={this.props.behaviour.session}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">Commands</div>
                    <Inputs.Checkbox name="Shutdown enabled" action={() => this.props.toggle("commands.shutdown")} value={this.props.behaviour.commands.shutdown}/>
                    <Inputs.Checkbox name="Reboot enabled" action={() => this.props.toggle("commands.reboot")} value={this.props.behaviour.commands.reboot}/>
                    <Inputs.Checkbox name="Sleep enabled" action={() => this.props.toggle("commands.sleep")} value={this.props.behaviour.commands.sleep}/>
                    <Inputs.Checkbox name="Hibernate enabled" action={() => this.props.toggle("commands.hibernate")} value={this.props.behaviour.commands.hibernate}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">Clock and Date</div>
                    <Inputs.Checkbox name="Clock enabled" action={() => this.props.toggle("clock.enabled")} value={this.props.behaviour.clock.enabled}/>
                    <Inputs.Textarea name="Clock format:" action={(v) => this.props.set("clock.format", v)} value={this.props.behaviour.clock.format}/>
                    <Inputs.Checkbox name="Date enabled" action={() => this.props.toggle("date.enabled")} value={this.props.behaviour.date.enabled}/>
                    <Inputs.Textarea name="Date format:" action={(v) => this.props.set("date.format", v)} value={this.props.behaviour.date.format}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">Misc</div>
                    <Inputs.Checkbox name="Settings button invisible" action={() => this.props.toggle("evoker")} value={this.props.behaviour.evoker}/>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {return {behaviour: state.settings.behaviour};},
    (dispatch) => {
        return {
            set: (key, value) => {dispatch({type: "Setting_Set", key: "behaviour." + key, value: value})},
            toggle: (key) => {dispatch({type: "Setting_Toggle", key: "behaviour." + key})}
        }
    }
)(Behaviour);