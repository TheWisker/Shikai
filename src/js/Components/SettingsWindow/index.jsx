import React from "react";

import Evoker from "./Evoker";
import Window from "./Window";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <React.Fragment>
                <Evoker callback={this.toggle}/>
                <Window callback={this.toggle} active={this.state.active}/>
            </React.Fragment>
        );
    }
}