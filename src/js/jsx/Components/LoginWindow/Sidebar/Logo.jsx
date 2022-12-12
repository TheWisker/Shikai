import React from "react";

export default class Logo extends React.Component {
    render() {
        return (
            <div class="logo">
                <img src={this.props.src}/>
            </div>
        );
    }
}