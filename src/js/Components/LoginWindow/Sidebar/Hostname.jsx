/**
 * @license Shikai
 * Hostname.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {data} from "../../../../lang";

class Hostname extends React.Component {
    render() {
        let classes = this.props.hidden ? ["hostname", "hidden"] : ["hostname"];
        classes.push(cxs({color: this.props.color}));
        return (<div className={classes.join(" ")}>{(window.__is_debug) ? data.get(this.props.lang, "demo.hostname") : this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.hostname,
        hidden: !state.settings.behaviour.hostname,
        color: state.settings.style.main.textcolor,
        lang: state.settings.behaviour.language
    };}
)(Hostname);