/**
 * @license Shikai
 * Checkbox.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggled: props.value};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {this.setState({toggled: !this.state.toggled}); this.props.action();}

    render() {
        return (<div className="inputbar">
            <input type="checkbox" onChange={this.toggle} checked={this.state.toggled}/>
            <div className="text">{this.props.name}</div>
        </div>);
    }
}