import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {types, notify} from "../../../Greeter/Notifications";

import {data} from "../../../../lang";

class Session extends React.Component {
    constructor(props) {
        super(props);
        if (window.__is_debug != true) {
            this.auth_event = () => {
                if (lightdm.is_authenticated) {
                    this.props.success();
                    notify(data.get(this.props.lang, "notifications.logged_in") + " " + this.props.user.username + "!", types.Success);
                    setTimeout(() => {lightdm.start_session(this.props.session.key);}, 1000);
                } else {notify(data.get(this.props.lang, "notifications.wrong_password"), types.Error);}
            };
        }
    }

    componentDidMount() {if (window.__is_debug != true) {lightdm.authentication_complete.connect(this.auth_event);}}
    
    componentWillUnmount() {if (window.__is_debug != true) {lightdm.authentication_complete.disconnect(this.auth_event);}}

    render() {
        let classes = this.props.hidden ? ["session", "hidden"] : ["session"];
        classes.push(cxs({color: this.props.color, borderRadius: this.props.radius, backgroundColor: this.props.background}));
        return (<div className={classes.join(" ")} onClick={() => {this.props.switch()}}>{this.props.name}</div>);
    }
}

export default connect(
    (state) => {return {
        user: state.runtime.user,
        name: state.runtime.session.name,
        hidden: !state.settings.behaviour.session,
        color: state.settings.style.userbar.session.color,
        radius: state.settings.style.userbar.session.radius,
        background: state.settings.style.userbar.session.background,
        session: state.runtime.session
    };},
    (dispatch) => {return {
        switch: () => {dispatch({type: "Switch_Session"})},
        success: () => {dispatch({type: "Start_Event", key: "loginSuccess"});},
        failure: () => {dispatch({type: "Start_Event", key: "loginFailure"});}
    }}
)(Session);