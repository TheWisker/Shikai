import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Username extends React.Component {
    render() {
        let classes = this.props.hidden ? ["username hidden"] : ["username"];
        classes.push(cxs({color: this.props.color}));
        return (<div className={classes.join(" ")}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.user.name,
        hidden: !state.settings.behaviour.user,
        color: state.settings.style.main.textcolor
    };}
)(Username);