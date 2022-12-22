import React from "react";
import {connect} from "react-redux";

import Image from "../../../assets/settings.svg";

class Evoker extends React.Component {
    render() {
        return (
            <div className={`evoker${this.props.hidden ? " hidden" : ""}`} onClick={this.props.callback}>
                <Image/>
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.evoker,
    };}
)(Evoker);