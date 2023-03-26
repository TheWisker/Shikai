import React from "react";
import {connect} from "react-redux";

class Logo extends React.Component {
    render() {
        return (
            <div className={`logo${this.props.hidden ? " hidden" : ""}`}>
                <img src={this.props.source}/>
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.logo,
        source: state.settings.style.sidebar.logo
    };}
)(Logo);