import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {types, notify} from "../../../Greeter/Notifications";

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
        if (window.__is_debug != true) {this.auth_event = () => {lightdm.respond(this.state.value); setTimeout(() => {if (!lightdm.is_authenticated) {this.props.failure();}}, 250)};}
    }

    componentDidMount() {if (window.__is_debug != true) {lightdm.show_prompt.connect(this.auth_event);}}
    
    componentWillUnmount() {if (window.__is_debug != true) {lightdm.show_prompt.disconnect(this.auth_event);}}

    update(e) {this.setState({value: e.target.value}); e.preventDefault();}

    submit(e) {
        if (e.which == 13) { //Enter key
            if (window.__is_debug === true) {
                if (this.state.value == "password") {
                    notify("Logged in as " + this.props.user.username + "!", types.Success); this.props.success();
                } else {notify("Wrong password!", types.Error); this.props.failure();}
            } else {lightdm.cancel_authentication(); lightdm.authenticate(this.props.user.username);}
        }; e.preventDefault();
    }
    
    render() {
        return (<input id="password" disabled={this.props.inactive} value={this.state.value} type="password" onChange={this.update} onKeyUp={this.submit} className={
            cxs({
                color: this.props.color,
                borderTop: this.props.border.top,
                borderBottom: this.props.border.top,
                borderLeft: this.props.border.left,
                borderRight: this.props.border.left,
                borderRadius: this.props.border.radius,
                background: this.props.background
            })
        }/>);
    }
}

export default connect(
    (state) => {return {
        color: state.settings.style.userbar.password.color,
        border: {
            top: state.settings.style.userbar.password.border.top,
            left: state.settings.style.userbar.password.border.left,
            radius: state.settings.style.userbar.password.border.radius
        },
        background: state.settings.style.userbar.password.background,
        inactive: state.runtime.events.inactivity,
        user: state.runtime.user
    };},
    (dispatch) => {return {
        success: () => {dispatch({type: "Start_Event", key: "loginSuccess"});},
        failure: () => {dispatch({type: "Start_Event", key: "loginFailure"});}
    };}
)(Password);