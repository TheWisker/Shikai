import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {date} from "../../../Tools/Formatter";

class _Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: "__:__:__"};
        this.update = this.update.bind(this);
    }
  
    componentDidMount() {
        this.update();
        if (!this.props.hidden) {this.interval = setInterval(() => {this.update();}, 60000);}
    }
    
    componentWillUnmount() {if (!this.props.hidden) {clearInterval(this.interval);}}
  
    update() {this.setState({date: date(this.props.format)});}
  
    render() {
        let classes = this.props.hidden ? ["text hidden"] : ["text"];
        classes.push(cxs({color: this.props.color}));
        return (<div className={classes.join(" ")}>{this.state.date}</div>);
    }
}

export default connect(
    (state) => {
        return {
            hidden: !state.settings.behaviour.date.enabled,
            format: state.settings.behaviour.date.format,
            color: state.settings.style.main.textcolor
        };
    }
)(_Date);