import React from "react";

import {ChromePicker} from "react-color";

export default class Colorpicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: props.color};
        this.update = this.update.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({active: !this.state.active});
    }

    update(color) {
        const rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b}${"," + color.rgb.a})`;
        this.setState({color: rgba});
        this.props.action(rgba);
    }

    render() {
        let picker = false;
        if (this.state.active) {picker = <ChromePicker color={this.state.color} onChange={(c) => this.update(c)}/>;}
        return (
            <div className="colorbar">
                <div className="text">{this.props.name}</div>
                <div className="button">
                    <div className="color" onClick={this.toggle} style={{backgroundColor: this.state.color}}/>
                    {picker}
                </div>
            </div>
        );
    }
}