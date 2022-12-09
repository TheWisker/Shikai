import React from "react";
import ReactDOM from "reactdom";

import {shutdown, restart, sleep, hibernate} from "./commands"

import Shutdown from "../assets/media/buttons/shutdown.svg";
import Restart from "../assets/media/buttons/reboot.svg";
import Sleep from "../assets/media/buttons/sleep.svg";
import Hibernate from "../assets/media/buttons/hibernate.svg";

window.lightdm = {
    "can_hibernate": true,
    "can_restart": false,
    "can_shutdown": true,
    "can_suspend": true
};

const options = [
    {text: "shutdown", icon: Shutdown, func: shutdown, bool: window.lightdm.can_shutdown},
    {text: "restart", icon: Restart, func: restart, bool: window.lightdm.can_restart},
    {text: "sleep", icon: Sleep, func: sleep, bool: window.lightdm.can_suspend},
    {text: "hibernate", icon: Hibernate, func: hibernate, bool: window.lightdm.can_hibernate}
]

class Option extends React.Component {
    render() {
        return (
            <div class="option" onClick={this.props.func}>
                <div class="icon">{this.props.icon}</div>
                <div class="text">{this.props.text}</div>
            </div>
        );
    }
}

export default function assemble() {
    let array = []; let root = document.getElementById("options");
    options.filter((option) => {return option.bool}).forEach((option, i) => {array[i] = <Option text={option.text} func={option.func} icon={<option.icon/>}/>});
    ReactDOM.render(<React.Fragment>{array}</React.Fragment>, root);
}