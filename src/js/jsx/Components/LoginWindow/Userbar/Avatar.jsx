import React from "react";

class _Avatar extends React.Component {
    render() {
        return (
            <div class="avatarbar">
                <img src={this.props.avatar}/>
            </div>
        );
    }
}

export default Avatar.assemble = () => {return <_Avatar avatar="assets/media/arch-logo.png"/>}