import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

class Switch extends React.Component {
    constructor(props) {super(props);}
    render() {return (<div className={"switch text button " + cxs({color: this.props.color})} onClick={() => {this.props.switch()}}>Switch</div>);}
}

export default connect((state) => {return {color: state.settings.style.main.textcolor}}, (dispatch) => {return {switch: () => {dispatch({type: "Switch_User"})}}})(Switch);