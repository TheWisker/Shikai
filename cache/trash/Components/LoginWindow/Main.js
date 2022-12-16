import React from "react";

import Sidebar from "./Sidebar";
import Userbar from "./Userbar";

export default (function () {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Sidebar, null),
        React.createElement(Userbar, null)
    );
});