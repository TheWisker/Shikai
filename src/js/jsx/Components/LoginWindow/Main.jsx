import React from "react";
import ReactDom from "reactdom";

import Sidebar from "./Sidebar"
import Userbar from "./Userbar"

export default LoginWindow.launch = () => {
    ReactDOM.render((
        <React.Fragment>
            {Sidebar.assemble()}
            {Userbar.assemble()}
        </React.Fragment>
    ), document.getElementById("loginroot"))
}