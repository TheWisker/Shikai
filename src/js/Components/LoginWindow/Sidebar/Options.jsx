import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {data} from "../../../../lang";

import {shutdown, restart, sleep, hibernate} from "../../../Greeter/Commands";

import Shutdown from "../../../../assets/commands/shutdown.svg";
import Reboot from "../../../../assets/commands/reboot.svg";
import Sleep from "../../../../assets/commands/sleep.svg";
import Hibernate from "../../../../assets/commands/hibernate.svg";

const options = [
    {text: "sleep", icon: Sleep, func: sleep},
    {text: "reboot", icon: Reboot, func: restart},
    {text: "shutdown", icon: Shutdown, func: shutdown},
    {text: "hibernate", icon: Hibernate, func: hibernate}
]

class Option extends React.Component {
    render() {
        return (<div className="command button" onClick={this.props.func}>
            <div className="icon">{this.props.icon}</div>
            <div className={"text " + cxs({color: this.props.color})}>{this.props.text}</div>
        </div>);
    }
}

class Options extends React.Component {
    render() {
        let array = [];
        options.filter((option) => {return this.props.commands[option.text]}).forEach((option, i) => {array[i] = <Option text={data.get(this.props.lang, "commands.names." + option.text)} func={option.func} icon={<option.icon/>} color={this.props.color} key={option.text}/>});
        return (<div className="commandbar">{array}</div>);
    }
}

export default connect(
    (state) => {return {
        commands: {
            shutdown: state.settings.behaviour.commands.shutdown,
            hibernate: state.settings.behaviour.commands.hibernate,
            reboot: state.settings.behaviour.commands.reboot,
            sleep: state.settings.behaviour.commands.sleep
        },
        color: state.settings.style.main.textcolor,
        lang: state.settings.behaviour.language
    };}
)(Options);