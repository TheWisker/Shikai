import React from "react";
import {connect} from "react-redux";

import {types, notify} from "../../../Greeter/Notifications";
import * as Inputs from "./Inputs";

import {data, names} from "../../../../lang";

class Behaviour extends React.Component {
    render() {
        return (<React.Fragment>
            <div className="scroll">
                <div className="section">
                    <div className="text title">{data.get(this.props.lang, "settings.behaviour.sections.general.name")}</div>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.general.options.logo")} action={() => this.props.toggle("logo")} value={this.props.behaviour.logo}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.general.options.hostname")} action={() => this.props.toggle("hostname")} value={this.props.behaviour.hostname}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.general.options.avatar")} action={() => this.props.toggle("avatar")} value={this.props.behaviour.avatar}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.general.options.username")} action={() => this.props.toggle("user")} value={this.props.behaviour.user}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.general.options.session")} action={() => this.props.toggle("session")} value={this.props.behaviour.session}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">{data.get(this.props.lang, "settings.behaviour.sections.lang.name")}</div>
                    <Inputs.Dropmenu items={names.map(o => {return {label: o, value: o}})} action={(v) => this.props.set("language", v)} value={this.props.behaviour.language}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">{data.get(this.props.lang, "settings.behaviour.sections.commands.name")}</div>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.commands.options.shutdown")} action={() => this.props.toggle("commands.shutdown")} value={this.props.behaviour.commands.shutdown}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.commands.options.reboot")} action={() => this.props.toggle("commands.reboot")} value={this.props.behaviour.commands.reboot}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.commands.options.sleep")} action={() => this.props.toggle("commands.sleep")} value={this.props.behaviour.commands.sleep}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.commands.options.hibernate")} action={() => this.props.toggle("commands.hibernate")} value={this.props.behaviour.commands.hibernate}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">{data.get(this.props.lang, "settings.behaviour.sections.time.name")}</div>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.time.options.clock.enabled")} action={() => this.props.toggle("clock.enabled")} value={this.props.behaviour.clock.enabled}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.behaviour.sections.time.options.clock.format")} action={(v) => this.props.set("clock.format", v)} value={this.props.behaviour.clock.format}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.time.options.date.enabled")} action={() => this.props.toggle("date.enabled")} value={this.props.behaviour.date.enabled}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.behaviour.sections.time.options.clock.format")} action={(v) => this.props.set("date.format", v)} value={this.props.behaviour.date.format}/>
                </div>
                <div className="section">
                    <div className="separator"/>
                    <div className="text title">{data.get(this.props.lang, "settings.behaviour.sections.misc.name")}</div>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.misc.options.idle.enabled")} action={() => this.props.toggle("idle.enabled")} value={this.props.behaviour.idle.enabled}/>
                    <Inputs.Textarea name={data.get(this.props.lang, "settings.behaviour.sections.misc.options.idle.value")} action={(v) => this.props.set("idle.timeout", v)} value={this.props.behaviour.idle.timeout}/>
                    <Inputs.Checkbox name={data.get(this.props.lang, "settings.behaviour.sections.misc.options.evoker")} action={() => this.props.toggle("evoker")} value={this.props.behaviour.evoker}/>            
                </div>
            </div>
            <div style={{width: "100%", minHeight: "20px", flexGrow: 1}}/>
            <Inputs.DoubleButton text={data.get(this.props.lang, "buttons.delete_local")} pressed_text={data.get(this.props.lang, "buttons.confirmation")} action={() => {localStorage.clear(); notify(data.get(this.props.lang, "notifications.delete_local"), types.Success);}} delay={2000}/>
        </React.Fragment>);
    }
}

export default connect(
    (state) => {return {behaviour: state.settings.behaviour, lang: state.settings.behaviour.language};},
    (dispatch) => {return {
        set: (key, value) => {dispatch({type: "Setting_Set", key: "behaviour." + key, value: value})},
        toggle: (key) => {dispatch({type: "Setting_Toggle", key: "behaviour." + key})}
    };}
)(Behaviour);