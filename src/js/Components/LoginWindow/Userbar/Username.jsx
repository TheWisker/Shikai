import React from "react";
import {connect} from "react-redux";

class Username extends React.Component {


    render() {
        //const name = useSelector((state) => state.user);
        //const dispatch = useDispatch()
        
        return (<div className="username">{this.props.name}</div>);
    }
}

export default connect(
    (state) => {
        return {user: state.user};
    }
)(Username);