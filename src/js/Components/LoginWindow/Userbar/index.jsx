import React from "react";

import Avatar from "./Avatar"
import Username from "./Username"
import Session from "./Session"
import Date from "./Date"

//import Arrow from "../../../../assets/media/icons/arrow.svg"

export default class Userbar extends React.Component {
    componentDidMount() {
        document.getElementById("password").focus();
    }

    render() {
        return (
            <div className="userbar">
                <Avatar src="assets/media/profile.jpg" color="black"/>
                <Username name="luwak"/>
                <form className="expand">
                    <div className="mainbar">
                        <input id="password"/>
                        <Session name="Cinnamon (Software)"/>
                    </div>
                </form>
                <div className="bottombar">
                    <div className="text">Switch User</div>
                    <div className="expand"/>
                    <Date format="%B %D, %Y"/>
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