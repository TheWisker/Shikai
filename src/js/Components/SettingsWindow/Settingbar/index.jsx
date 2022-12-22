import React from "react";
import {connect} from "react-redux";

class Settingbar extends React.Component {
    render() {
        return (
            <div id="sectionroot" className="settingbar">

            </div>
        );
    }
}

export default connect(
    (state) => {return {
        hidden: !state.settings.behaviour.evoker,
    };}
)(Settingbar);