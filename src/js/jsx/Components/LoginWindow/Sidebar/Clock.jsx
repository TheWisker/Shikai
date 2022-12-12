import React from "react";

import format from "../../../Tools/Formatter";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {running: false, time: "__:__"};
    }
  
    componentDidMount() {
        setInterval(() => {
            this.update();
            this.setState({running: true});
        }, 1000);
    }
  
    update() {this.setState({time: format(new Date(), this.props.format)});}
  
    render() {
        return (<div class="text">{this.state.time}</div>);
    }
}