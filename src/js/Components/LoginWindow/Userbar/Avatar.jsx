import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import {getUserImage} from "../../../Greeter/Operations";

class Avatar extends React.Component {
    componentDidMount() {
        let image = ReactDOM.findDOMNode(this).querySelector("div");
        image.style.width = image.offsetHeight + "px";
    }

    componentDidUpdate() {
        let image = ReactDOM.findDOMNode(this).querySelector("div");
        image.style.width = image.offsetHeight + "px";
    }
    
    render() {
        return (
            <div className={`avatarbar${this.props.hidden ? " hidden" : ""}`}>
                <div style={{backgroundImage: `url(${this.props.source})`, backgroundColor: this.props.color, borderColor: this.props.color}}/>
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.avatar,
        color: state.settings.style.userbar.avatar.color,
        source: getUserImage(state.runtime.user)
    };}
)(Avatar);