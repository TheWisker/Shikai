import React from "react";
import Dropdown from "react-dropdown";

export default class Dropmenu extends React.Component {
    render() {return (<Dropdown options={this.props.items} onChange={(o) => this.props.action(o.value)} value={this.props.value}/>);}
}