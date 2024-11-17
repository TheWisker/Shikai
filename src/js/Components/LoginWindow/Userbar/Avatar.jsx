/**
 * @license Shikai
 * Avatar.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import {getUserImage} from "../../../Greeter/Operations";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        let image = this.imageRef.current;
        image.style.width = image.offsetHeight + "px";
    }

    componentDidUpdate() {
        let image = this.imageRef.current;
        image.style.width = image.offsetHeight + "px";
    }
    
    render() {
        return (<div className={`avatarbar${this.props.hidden ? " hidden" : ""}`}>
            <div ref={this.imageRef} style={{backgroundImage: `url(${this.props.source})`, backgroundColor: this.props.color, borderColor: this.props.color}}/>
        </div>);
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.avatar,
        color: state.settings.style.userbar.avatar.color,
        source: getUserImage(state.runtime.user)
    };}
)(Avatar);