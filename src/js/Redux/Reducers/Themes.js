import Copy from "../../Tools/Copy"

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
        default:
            return state.themes;
    }
}