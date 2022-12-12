import React from "react";

export default class Avatar extends React.Component {
    render() {
        return (
            <div class="avatarbar">
                <img src={this.props.src}/>
            </div>
        );
    }
}