import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import Image from "../../../assets/settings.svg";

class Evoker extends React.Component {
    render() {
        return (
            <div className={`evoker${(this.props.visible) ? (" " + cxs({opacity: 1})) : ""}`} onClick={this.props.callback}>
                <Image/>
            </div>
        );
    }
}

export default connect((state) => {return {visible: !state.settings.behaviour.evoker,};})(Evoker);