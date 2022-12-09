import React from "react";
import ReactDom from "reactdom";

import Sidebar from "./Sidebar";
import Userbar from "./Userbar";

export default LoginWindow.launch = function () {
    ReactDOM.render(React.createElement(
        React.Fragment,
        null,
        Sidebar.assemble(),
        Userbar.assemble()
    ), document.getElementById("loginroot"));
};