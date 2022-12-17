import React from "react";

import Logo from "./Logo"
import Options from "./Options"
import Clock from "./Clock"

//import Environment from "../../../Core/Environment";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Logo src="assets/media/arch-logo.png"/>
                <Options/>
                <div className="bottombar">
                    <div className="hostname">{"ArchyLuwak"}</div>
                    <div className="expand"/>
                    <Clock format="%H:%M:%S"/>
                </div>
            </div>
        )
    }
}