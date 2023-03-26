import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import Logo from "./Logo";
import Options from "./Options";
import Hostname from "./Hostname";
import Clock from "./Clock";

class Sidebar extends React.Component {
    render() {
        return (
            <div className={"sidebar " + cxs({backgroundColor: this.props.color})}>
                <Logo/>
                <Options/>
                <div className="bottombar">
                    <Hostname/>
                    <div className="expand"/>
                    <Clock/>
                </div>
            </div>
        )
    }
}

export default connect((state) => {return {color: state.settings.style.sidebar.background};})(Sidebar);