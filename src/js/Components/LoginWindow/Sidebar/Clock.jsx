import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {time} from "../../../Tools/Formatter";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: "__:__:__"};
        this.update = this.update.bind(this);
    }
  
    componentDidMount() {
        this.update();
        if (!this.props.hidden) {this.interval = setInterval(() => {this.update();}, 1000);}
    }
    
    componentWillUnmount() {if (!this.props.hidden) {clearInterval(this.interval);}}
  
    update() {this.setState({time: time(this.props.format)});}
  
    render() {
        let classes = this.props.hidden ? ["text", "hidden"] : ["text"];
        classes.push(cxs({color: this.props.color}));
        return (<div className={classes.join(" ")}>{this.state.time}</div>);
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.clock.enabled,
        format: state.settings.behaviour.clock.format,
        color: state.settings.style.main.textcolor
    };}
)(Clock);