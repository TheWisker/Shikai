import React from "react";

export default class Avatar extends React.Component {
    render() {
        return (
            <div className="avatarbar">
                <div style={{backgroundImage: `url(${this.props.src})`, backgroundColor: this.props.color, borderColor: this.props.color}}/>
            </div>
        );
    }
}