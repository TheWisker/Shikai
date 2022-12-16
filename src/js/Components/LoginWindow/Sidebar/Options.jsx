import React from "react";

import {shutdown, restart, sleep, hibernate} from "../../../Greeter/Commands"

import Shutdown from "../../../../assets/media/commands/shutdown.svg";
import Restart from "../../../../assets/media/commands/reboot.svg";
import Sleep from "../../../../assets/media/commands/sleep.svg";
import Hibernate from "../../../../assets/media/commands/hibernate.svg";

window.lightdm = { // Debug
    "can_hibernate": true,
    "can_restart": true,
    "can_shutdown": true,
    "can_suspend": true
};
/*
const options = [
    {text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown},
    {text: "restart", icon: Restart, func: restart, bool: window.lightdm.can_restart},
    {text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend},
    {text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate}
]*/

const options = [
    {text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend},
    {text: "restart", icon: Restart, func: restart, bool: window.lightdm.can_restart},
    {text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown},
    {text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate}
]

class Option extends React.Component {
    render() {
        return (
            <div class="command" onClick={this.props.func}>
                <div class="icon">{this.props.icon}</div>
                <div class="text">{this.props.text}</div>
            </div>
        );
    }
}

export default class Options extends React.Component {
    render() {
        let array = [];
        options.filter((option) => {return option.bool}).forEach((option, i) => {array[i] = <Option text={option.text} func={option.func} icon={<option.icon/>}/>});
        return (<div class="commandbar">{array}</div>);
    }
}