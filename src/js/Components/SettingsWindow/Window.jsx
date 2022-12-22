import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import Sectionbar from "./Sectionbar";

import Behaviour from "./Sections/Behaviour";
import Style from "./Sections/Style";

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: "behaviour"};
        this.update = this.update.bind(this);
    }

    update(tab) {
        this.setState({display: tab});
    }

    render() {
        let tab;
        let classes = this.props.hidden ? ["settingwindow hidden"] : ["settingwindow"];
        if (this.props.active) {classes.push("active");}
        switch(this.state.display) {
            case "style":
                tab = <Style/>;
                break;
            default:
                tab = <Behaviour/>;
                break;
        }
        return (
            <div className={classes.join(" ")}>
                <Sectionbar action={(a) => this.update(a)} callback={this.props.callback}/>
                <div className="displaybar">{tab}</div>
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.evoker,
    };}
)(Window);