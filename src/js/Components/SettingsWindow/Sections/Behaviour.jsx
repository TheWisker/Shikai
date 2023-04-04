import React from "react";
import {connect} from "react-redux";

import {types, notify} from "../../../Greeter/Notifications";
import * as Inputs from "./Inputs";

class Behaviour extends React.Component {
    render() {
        return (<React.Fragment>
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
                <Inputs.Checkbox name="Hide on idle" action={() => this.props.toggle("idle.enabled")} value={this.props.behaviour.idle.enabled}/>
                <Inputs.Textarea name="Idle timeout value:" action={(v) => this.props.set("idle.timeout", v)} value={this.props.behaviour.idle.timeout}/>
                <Inputs.Checkbox name="Settings button invisible" action={() => this.props.toggle("evoker")} value={this.props.behaviour.evoker}/>            
            </div>
            <div className="expand"></div>
            <Inputs.DoubleButton text="Delete LocalStorage" pressed_text="This cannot be undone!" action={() => {localStorage.clear(); notify("LocalStorage deleted!", types.Success);}} delay={2000}/>
        </React.Fragment>);
    }
}

export default connect(
    (state) => {return {behaviour: state.settings.behaviour};},
    (dispatch) => {return {
        set: (key, value) => {dispatch({type: "Setting_Set", key: "behaviour." + key, value: value})},
        toggle: (key) => {dispatch({type: "Setting_Toggle", key: "behaviour." + key})}
    };}
)(Behaviour);