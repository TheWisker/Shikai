import React from "react";

import Logo from "./Logo"
import Options from "./Options"
import Clock from "./Clock"

export default class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <Logo src="assets/media/arch-logo.png"/>
                <Options/>
                <div class="bottombar">
                    <div class="hostname">MERCURY</div>
                    <Clock format="%H:%S"/>
                </div>
            </div>
        )
    }
}