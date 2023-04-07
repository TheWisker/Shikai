import React from "react";
import Draggable from "react-draggable";

import Sidebar from "./Sidebar";
import Userbar from "./Userbar";

const window_height = 500;
const window_width = 850;

export default class LoginWindow extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem("LoginDrag")) {localStorage.setItem("LoginDrag", JSON.stringify({x: 0, y: 0}))}
        this.state = {data: JSON.parse(localStorage.getItem("LoginDrag"))};
        this.dragEvent = this.dragEvent.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    dragEvent(_, _data) {this.setState({data: {x: _data.x, y: _data.y}});}

    dragStop(_, data) {localStorage.setItem("LoginDrag", JSON.stringify({x: data.x, y: data.y}));}
    //{left: ((screen.availWidth/2) - (window_width/2)), right: ((screen.availWidth/2) + (window_width)), top: (screen.availHeight/2) - (window_height/2), bottom: (screen.availHeight/2) + (window_height)}
    render() { //disabled={!this.props.active}
        //if (this.state.data.x == 0) {classes.push("origin_left");}
        //if (this.state.data.x == screen.availWidth - window_width) {classes.push("origin_right");}
        //let t = (this.props.active) ? null : ("translate(" + (((this.state.data.x + (window_width/2)) <= (screen.availWidth/2)) ? (-(this.state.data.x + window_width)) : (screen.availWidth - this.state.data.x)) + "px, 0px)");
        let bounds = {left: -((screen.availWidth/2) - (window_width/2)), right: ((screen.availWidth/2) - (window_width/2)), top: -((screen.availHeight/2) - (window_height/2)), bottom: ((screen.availHeight/2) - (window_height/2))};
        return (<Draggable axis="both" handle="#login_handle" bounds={bounds} position={this.state.data} onDrag={this.dragEvent} onStop={this.dragStop}>
            <div id="login_drag">
                <div style={{borderTopLeftRadius: (this.state.data.x == bounds.left || this.state.data.y == bounds.top) ? "0px" : null, borderTopRightRadius: (this.state.data.x == bounds.right || this.state.data.y == bounds.top) ? "0px" : null, borderBottomLeftRadius: (this.state.data.x == bounds.left || this.state.data.y == bounds.bottom) ? "0px" : null, borderBottomRightRadius: (this.state.data.x == bounds.right || this.state.data.y == bounds.bottom) ? "0px" : null}}>
                    <Sidebar/>
                    <Userbar action={() => {
                        document.getElementById("login_drag").style.transition = "transform 400ms";
                        this.dragEvent(null, {x: 0, y: 0}); this.dragStop(null, {x: 0, y: 0});
                        setTimeout(() => {document.getElementById("login_drag").style.transition = "";}, 400);
                    }}/>
                </div>
            </div>
        </Draggable>);
    }
}