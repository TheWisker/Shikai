import Runtime from "./Reducers/Runtime";
import Settings from "./Reducers/Settings";
import Themes from "./Reducers/Themes";

import Copy from "../Tools/Copy"

export default function(default_state) {
    return (state = default_state, action) => {
        //console.log(action.type, state, "Reducer");
        switch(action.type) {
            case "Theme_Activate":
                return {...state, settings: Copy(state.themes[action.key].settings)};
            case "Set_Logos":
                return {...state, runtime: {...state.runtime, logos: action.payload}};
            default:
                return {...state, runtime: Runtime(state.runtime, action), settings: Settings(state.settings, action), themes: Themes(state, action)}
        }
    }
}