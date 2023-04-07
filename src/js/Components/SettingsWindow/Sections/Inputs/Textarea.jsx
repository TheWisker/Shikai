import React from "react";

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
        this.update = this.update.bind(this);
    }

    update(event) {
        let inx = (event.target.value.slice(-1) == ";") ? -1 : -2;
        this.setState({value: event.target.value.slice(0, inx)});
        this.props.action(event.target.value.slice(0, inx));
        event.preventDefault();
    }

    render() {
        return (<div className="inputbar">
            <div className="text">{this.props.name + ":"}</div>
            <input type="text" value={this.state.value + ";"} onChange={this.update} disabled={this.props.disabled}/>
        </div>);
    }
}