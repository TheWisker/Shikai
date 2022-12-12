import React from "react";
import ReactDOM from "reactdom";

import Sidebar from "./Sidebar";
import Userbar from "./Userbar";

export default function LoginLaunch() {
    ReactDOM.render(React.createElement(
        React.Fragment,
        null,
        React.createElement(Sidebar, null),
        React.createElement(Userbar, null)
    ), document.getElementById("loginroot"));
}