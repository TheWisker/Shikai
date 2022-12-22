export default function Themes(state, action) {
    switch (action.type) {
        case "Theme_Add":
            var themes = [...state];
            themes.push(action.value);
            return themes;
        case "Theme_Remove":
            var themes = [...state];
            if (themes.length >= action.key) {themes.splice(action.key, 1);}
            return themes;
        case "Theme_Update":
            var themes = [...state];
            if (themes.length >= action.key) {themes[action.key] = action.value;}
            return themes;
        default:
            return state;
    }
}