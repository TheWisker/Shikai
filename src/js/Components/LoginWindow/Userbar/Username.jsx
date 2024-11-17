/**
 * @license Shikai
 * Username.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import cxs from "cxs";

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.last_username = props.name;
        this.thisRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.name != this.last_username) {
            this.last_username = this.props.name;
            let element = this.thisRef.current;
            element.style.opacity = 0.2;
            setTimeout(() => {element.style.opacity = 1;}, 200);
        }
    }

    render() {
        let classes = this.props.hidden ? ["username", "hidden"] : ["username"];
        classes.push(cxs({color: this.props.color}));
        return (<div ref={this.thisRef} className={classes.join(" ")}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.user.username,
        hidden: !state.settings.behaviour.user,
        color: state.settings.style.main.textcolor
    };}
)(Username);