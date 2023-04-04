import React from "react";

export default class DoubleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false};
        this.press = this.press.bind(this);
    }

    press() {
        clearTimeout(this.timeout);
        if (this.state.pressed) {this.props.action(); this.setState({pressed: false});} else {
            this.setState({pressed: true}); this.timeout = setTimeout(() => {this.setState({pressed: false});}, this.props.delay);
        }
    }

    render() {
        let styles = {
            color: (this.state.pressed ? "red" : null),
            borderColor: (this.state.pressed ? "red" : null),
        }; return (<div className="bottom-button" style={styles} onClick={this.press}>{this.state.pressed ? this.props.pressed_text : this.props.text}</div>);
    }
}