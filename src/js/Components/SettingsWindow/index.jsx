import React from "react";
import {connect} from "react-redux";

import Evoker from "./Evoker";
import Window from "./Window";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.toggle = this.toggle.bind(this);
        props.update();
    }

    toggle() {this.setState({active: !this.state.active}); this.props.save();}

    render() {
        return (<React.Fragment>
            <Evoker callback={this.toggle}/>
            <Window callback={this.toggle} active={this.state.active}/>
        </React.Fragment>);
    }
}

export default connect(null, (dispatch) => {return {
    save: () => {dispatch({type: "Settings_Save"})},
    update: () => {dispatch({type: "Settings_Update"})}
}})(Settings);