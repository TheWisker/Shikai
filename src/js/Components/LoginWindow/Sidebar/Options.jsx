import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {shutdown, restart, sleep, hibernate} from "../../../Greeter/Commands";

import Shutdown from "../../../../assets/commands/shutdown.svg";
import Reboot from "../../../../assets/commands/reboot.svg";
import Sleep from "../../../../assets/commands/sleep.svg";
import Hibernate from "../../../../assets/commands/hibernate.svg";

/*
const options = [
    {text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown},
    {text: "restart", icon: Restart, func: restart, bool: window.lightdm.can_restart},
    {text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend},
    {text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate}
]*/

const options = [
    {text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend},
    {text: "reboot", icon: Reboot, func: restart, bool: window.lightdm.can_restart},
    {text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown},
    {text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate}
]

class Option extends React.Component {
    render() {
        return (
            <div className="command button" onClick={this.props.func}>
                <div className="icon">{this.props.icon}</div>
                <div className={"text " + cxs({color: this.props.color})}>{this.props.text}</div>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        let array = [];
        options.filter((option) => {return option.bool && this.props.commands[option.text]}).forEach((option, i) => {array[i] = <Option text={option.text} func={option.func} icon={<option.icon/>} color={this.props.color} key={option.text}/>});
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
        color: state.settings.style.main.textcolor
    };}
)(Options);