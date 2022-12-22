import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Password extends React.Component {
    render() {
        return (<input id="password" className={
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
            background: state.settings.style.userbar.password.background
        };
    }
)(Password);