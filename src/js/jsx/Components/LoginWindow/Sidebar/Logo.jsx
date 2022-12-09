import React from "react";

class _Logo extends React.Component {
    render() {
        return (
            <div class="logo">
                <img src={this.props.logo}/>
            </div>
        );
    }
}

export default Logo.assemble = () => {return <_Logo logo="assets/media/arch-logo.png"/>}