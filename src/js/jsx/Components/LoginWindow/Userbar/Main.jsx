import React from "react";

import Avatar from "./Avatar"
import Username from "./Username"
import Session from "./Session"

//import Arrow from "../../../../assets/media/icons/arrow.svg"

export default class Userbar extends React.Component {
    render() {
        return (
            <div class="userbar">
                <Avatar src="assets/media/arch-logo.png" color="black"/>
                <Username name="luwak"/>
                <form class="expand">
                    <div class="mainbar">
                        <input id="password"></input>
                        <Session name="Cinnamon (Software)"/>
                    </div>
                </form>
                <div class="bottombar">
                    <div class="text">Switch User</div>
                </div>
            </div>
        )
    }
}

/*
<div class="submitswitch">
    <Arrow/>
</div>
*/