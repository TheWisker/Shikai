import React from "react";
import {connect} from "react-redux";

import {types, notify} from "../../../Greeter/Notifications";
import * as Inputs from "./Inputs";

import {data} from "../../../../lang";

class Theme extends React.Component {
    render() {
        return (<div className="theme">
            {this.props.name}
            <div className="expand"/>
            <div className="button" style={{textAlign: "center", minWidth: "fit-content"}} onClick={() => {notify(data.get(this.props.lang, "misc.theme") + " " + this.props.name + " " + data.get(this.props.lang, "notifications.theme_activated"), types.Success); this.props.func(this.props.index, "Theme_Activate")}}>{data.get(this.props.lang, "buttons.use")}</div>
            <div className="button" style={{textAlign: "center", minWidth: "fit-content"}} onClick={() => {notify(data.get(this.props.lang, "misc.theme") + " " + this.props.name + " " + data.get(this.props.lang, "notifications.theme_removed"), types.Success); this.props.func(this.props.index, "Theme_Remove")}}>{data.get(this.props.lang, "buttons.remove")}</div>
        </div>);
    }
}

class Themes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {new_name: data.get(props.lang, "misc.theme") + "_" + (props.themes.length + 1)};
        props.update();
    }

    render() {
        let array = [];
        this.props.themes.forEach((theme, i) => {array[i] = <Theme name={theme.name} index={i} func={(index, action) => {this.props.theme_action(index, action)}} lang={this.props.lang} key={theme.name}/>});
        return (<React.Fragment>
            <div className="section">
                <div className="text title">{data.get(this.props.lang, "settings.themes.current.name")}</div>
                <Inputs.Textarea name={data.get(this.props.lang, "settings.themes.current.option")} value={this.state.new_name} action={(name) => {this.setState({new_name: name});}}/>
                <div className="text button" onClick={() => {notify(data.get(this.props.lang, "misc.theme") + " " + this.state.new_name + " added!", types.Success); this.props.add(this.state.new_name)}}>{data.get(this.props.lang, "buttons.save")}</div>
            </div>
            <div className="section" style={{minHeight: "0"}}>
                <div className="separator"/>
                <div className="text title">{data.get(this.props.lang, "settings.themes.saved")}</div>
                <div className="scroll">{array}</div>
            </div>
            <div style={{minHeight: "20px", flexGrow: 1, flexShrink: 1}}></div>
            <Inputs.DoubleButton text={data.get(this.props.lang, "buttons.delete_themes")} pressed_text={data.get(this.props.lang, "buttons.confirmation")} action={() => {localStorage.removeItem("Themes"); this.props.purge(); notify(data.get(this.props.lang, "notifications.delete_themes"), types.Success);}} delay={2000}/>
        </React.Fragment>);
    }
}

export default connect(
    (state) => {return {themes: state.themes, lang: state.settings.behaviour.language};},
    (dispatch) => {return {
        add: (name) => {dispatch({type: "Theme_Add", value: name}); dispatch({type: "Themes_Save"});}, 
        theme_action: (index, action) => {dispatch({type: action, key: index});  dispatch({type: "Themes_Save"});},
        purge: () => {dispatch({type: "Theme_Purge"});},
        update: () => {dispatch({type: "Themes_Update"});}
    }}
)(Themes);