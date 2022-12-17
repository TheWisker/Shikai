import React from "react";

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={this.props.src}/>
            </div>
        );
    }
}