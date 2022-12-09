import React from "react";

import Logo from "./Logo"
import Options from "./Options"
import Clock from "./Clock"

class _Sidebar extends React.Component {
    render() {
        return (
            <div class="optionbar">
                {Logo.assemble()}
                {Options.assemble()}
                <div clas="infobar">
                    <div class="hostname">MERCURY</div>
                    {Clock.assemble()}
                </div>
            </div>
        )
    }
}

export default Sidebar.assemble = () => {return <_Sidebar/>}