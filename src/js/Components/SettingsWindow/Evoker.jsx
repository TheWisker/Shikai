/**
 * @license Shikai
 * Evoker.jsx
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import Image from "../../../assets/settings.svg";

class Evoker extends React.Component {
    render() {
        return (<div className={`evoker${(this.props.visible) ? (" " + cxs({opacity: 1})) : ""}`} onClick={this.props.callback}>
            <Image/>
        </div>);
    }
}

export default connect((state) => {return {visible: !state.settings.behaviour.evoker,};})(Evoker);