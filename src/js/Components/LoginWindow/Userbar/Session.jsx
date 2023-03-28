import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {types, notify} from "../../../Greeter/Notifications"

class Session extends React.Component {
    constructor(props) {
        super(props);
        if (window.__is_debug != true) {this.auth_event = () => {
            if (window.lightdm.is_authenticated) {
                window.lightdm.start_session(this.props.session.name);
            } else {notify("Wrong password!", types.Error);}
        };}
    }

    componentDidMount() {if (window.__is_debug != true) {window.lightdm.authentication_complete.connect(this.auth_event);}}
    
    componentWillUnmount() {if (window.__is_debug != true) {window.lightdm.authentication_complete.disconnect(this.auth_event);}}

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
        background: state.settings.style.userbar.session.background,
        session: state.runtime.session
    };},
    (dispatch) => {return {switch: () => {dispatch({type: "Switch_Session"})}}}
)(Session);