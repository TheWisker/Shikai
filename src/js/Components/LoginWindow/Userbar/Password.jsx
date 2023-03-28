import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {types, notify} from "../../../Greeter/Notifications"

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
        if (window.__is_debug != true) {this.auth_event = () => {window.lightdm.respond(this.state.value);};}
    }

    componentDidMount() {if (window.__is_debug != true) {window.lightdm.show_prompt.connect(this.auth_event);}}
    
    componentWillUnmount() {if (window.__is_debug != true) {window.lightdm.show_prompt.disconnect(this.auth_event);}}

    update(e) {
        this.setState({value: e.target.value});
        e.preventDefault();
    }

    submit(e) {
        if (e.which == 13) {
            if (window.__is_debug === true) {
                if (this.state.value == "password") {notify("Logged in as " + this.props.user.username + "!", types.Success);} else {
                    notify("Wrong password!", types.Error);
                }
            } else {window.lightdm.authenticate(this.props.user.username);}
        }; e.preventDefault();
    }
    
    render() {
        return (<input id="password" value={this.state.value} onChange={this.update} onKeyUp={this.submit} className={
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
    (state) => {
        return {
            color: state.settings.style.userbar.password.color,
            border: {
                top: state.settings.style.userbar.password.border.top,
                left: state.settings.style.userbar.password.border.left,
                radius: state.settings.style.userbar.password.border.radius
            },
            background: state.settings.style.userbar.password.background,
            user: state.runtime.user
        };
    }
)(Password);