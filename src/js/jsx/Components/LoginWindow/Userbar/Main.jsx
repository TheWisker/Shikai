import React from "react";

import Avatar from "./Avatar"
import Username from "./Username"
import Session from "./Session"

import Arrow from "../../../../assets/media/icons/arrow.svg"

export default class Userbar extends React.Component {
    render() {
        return (
            <div class="userbar">
                <Avatar src="assets/media/arch-logo.png"/>
                <Username name="luwak"/>
                <form>
                    <div class="passbar">
                        <input id="password" class="password"></input>
                    </div>
                    <div class="submitbar">
                        <Session name="Cinnamon (Software)"/>
                        <div class="submitswitch">
                            <Arrow/>
                        </div>
                    </div>
                </form>
                <div class="userswitch">Switch User</div>
            </div>
        )
    }
}