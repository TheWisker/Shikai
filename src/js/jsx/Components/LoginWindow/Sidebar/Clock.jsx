import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {running: false, time: ""};
    }
  
    componentDidMount() {
        setInterval(() => {
            this.update();
            this.setState({running: true});
        }, 1000);
    }
  
    update() {this.setState({time: Strftime(this.props.settings.time_format)});}
  
    render() {
        let currentTime = this.state.time;
        if (this.state.initialized === true && this.props.settings.time_enabled === true) {

        } else if (this.props.settings.time_enabled === false) {

        }
        return (<div>{ currentTime }</div>);
    }
}