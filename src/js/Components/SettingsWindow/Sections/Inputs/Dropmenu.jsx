/**
 * @license Shikai
 * Dropmenu.jsx
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Dropdown from "react-dropdown";

export default class Dropmenu extends React.Component {
    render() {return (<Dropdown options={this.props.items} onChange={(o) => this.props.action(o.value)} value={this.props.value}/>);}
}