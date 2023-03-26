import React from "react";

import Image from "../../../../assets/close.svg";

export default class Sectionbar extends React.Component {
    render() {
        return (
            <div className="sectionbar">
                <div className="text button" onClick={this.props.action}>Behaviour</div>
                <div className="text button" onClick={() => this.props.action("style")}>Style</div>
                <div className="text button" onClick={() => this.props.action("themes")}>Themes</div>
                <div className="button" onClick={this.props.callback}>
                    <Image/>
                </div>
            </div>
        );
    }
}