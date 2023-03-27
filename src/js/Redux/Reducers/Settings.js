import {query, update} from "../../Tools/Dictionary";
import {saveSettings, getSettings} from "../../Greeter/Storage";

export default function Settings(state, action) {
    switch (action.type) {
        case "Setting_Set":
            return update(state, action.key, action.value);
        case "Setting_Toggle":
            return update(state, action.key, !query(state, action.key));
        case "Settings_Save":
            return saveSettings(state);
        case "Settings_Update":
            let value = getSettings();
            return (value == null) ? state : value;
        default:
            return state;
    }
}