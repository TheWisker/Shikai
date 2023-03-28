import Copy from "../../Tools/Copy"
import {saveThemes, getThemes} from "../../Greeter/Storage";

export default function Themes(state, action) {
    switch (action.type) {
        case "Theme_Add":
            var themes = Copy(state.themes);
            themes.push({name: action.value, settings: Copy(state.settings)});
            return themes;
        case "Theme_Remove":
            var themes = Copy(state.themes);
            if (themes.length > action.key) {themes.splice(action.key, 1);}
            return themes;
        case "Themes_Save":
            return saveThemes(state.themes);
        case "Themes_Update":
            let value = getThemes();
            return (value == null) ? state.themes : value;
        default:
            return state.themes;
    }
}