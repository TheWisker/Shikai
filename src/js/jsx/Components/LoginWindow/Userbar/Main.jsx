import React from "react";

import Avatar from "./Avatar"
import Username from "./Username"
import Session from "./Session"

import Arrow from "../../../../assets/media/icons/arrow.svg"

class _Userbar extends React.Component {
    render() {
        return (
            <div class="userbar">
                {Avatar.assemble()}
                {Username.assemble()}
                <form>
                    <div class="passbar">
                        <input id="password" class="password"></input>
                    </div>
                    <div class="submitbar">
                        {Session.assemble()}
                        <div class="submitswitch">
                            <Arrow/>
                        </div>
                    </div>
                </form>
                <div class="userswitch">Switch User</div>
            </div>
        )
    }
}

export default Userbar.assemble = () => {return <_Userbar/>}