import React from "react";
import {connect} from "react-redux";

class Avatar extends React.Component {
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
        source: state.settings.style.userbar.avatar.source
    };}
)(Avatar);