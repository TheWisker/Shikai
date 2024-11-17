/**
 * @license Shikai
 * Logo.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";

class Logo extends React.Component {
    render() {
        return (<div className={`logo${this.props.hidden ? " hidden" : ""}`} style={this.props.divStyle}>
            <img src={this.props.source} style={{minHeight: "120px"}}/>
        </div>);
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.logo,
        source: state.settings.style.sidebar.logo
    };}
)(Logo);