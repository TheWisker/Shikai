import Runtime from "./Reducers/Runtime";
import Settings from "./Reducers/Settings";
import Themes from "./Reducers/Themes";

export default function Reducer(state = {}, action) {
    console.log("State", state);
    switch(action.type) {
        case "Theme_Activate":
            return {...state, settings: state.themes[action.key]};  
        default:
            return {...state, runtime: Runtime(state.runtime, action), settings: Settings(state.settings, action), themes: Themes(state.themes, action)}
    }
}