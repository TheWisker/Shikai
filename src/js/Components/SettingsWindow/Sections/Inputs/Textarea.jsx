import React from "react";

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
        this.update = this.update.bind(this);
    }

    update(event) {
        this.setState({value: event.target.value});
        this.props.action(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="inputbar">
                <div className="text">{this.props.name}</div>
                <input type="text" value={this.state.value} onChange={this.update} disabled={this.props.disabled}/>
            </div>
        );
    }
}