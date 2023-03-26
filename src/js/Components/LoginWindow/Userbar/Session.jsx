import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Session extends React.Component {
    render() {
        let classes = this.props.hidden ? ["session", "hidden"] : ["session"];
        classes.push(cxs({color: this.props.color, borderRadius: this.props.radius, backgroundColor: this.props.background}));
        return (<div className={classes.join(" ")} onClick={() => {this.props.switch()}}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.session.name,
        hidden: !state.settings.behaviour.session,
        color: state.settings.style.userbar.session.color,
        radius: state.settings.style.userbar.session.radius,
        background: state.settings.style.userbar.session.background
    };},
    (dispatch) => {return {switch: () => {dispatch({type: "Switch_Session"})}}}
)(Session);