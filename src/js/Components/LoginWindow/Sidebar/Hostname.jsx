import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Hostname extends React.Component {
    render() {
        let classes = this.props.hidden ? ["hostname hidden"] : ["hostname"];
        classes.push(cxs({color: this.props.color}));
        return (<div className={classes.join(" ")}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        name: state.runtime.hostname,
        hidden: !state.settings.behaviour.hostname,
        color: state.settings.style.main.textcolor
    };}
)(Hostname);