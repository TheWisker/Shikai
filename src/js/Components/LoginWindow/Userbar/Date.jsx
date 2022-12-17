import React from "react";

import format from "../../../Tools/Formatter";

export default class _Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {running: false, date: "__/__/__"};
    }
  
    componentDidMount() {
        this.update();
        setInterval(() => {
            this.update();
            this.setState({running: true});
        }, 60000);
    }
  
    update() {this.setState({date: format(new Date(), this.props.format)});}
  
    render() {
        return (<div className="text">{this.state.date}</div>);
    }
}