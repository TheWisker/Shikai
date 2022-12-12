import React from "react";
import ReactDOM from "reactdom";

import Sidebar from "./Sidebar"
import Userbar from "./Userbar"

export default function LoginLaunch() {
    ReactDOM.render((
        <React.Fragment>
            <Sidebar/>
            <Userbar/>
        </React.Fragment>
    ), document.getElementById("loginroot"));
}