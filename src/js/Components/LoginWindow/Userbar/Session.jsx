import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Session extends React.Component {
    render() {
        let classes = this.props.hidden ? ["session hidden"] : ["session"];
        classes.push(cxs({color: this.props.color, backgroundColor: this.props.background}));
        return (<div className={classes.join(" ")}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.session.name,
        hidden: !state.settings.behaviour.session,
        color: state.settings.style.userbar.session.color,
        background: state.settings.style.userbar.session.background
    };}
)(Session);