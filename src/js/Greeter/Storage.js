function saveItem(key, data) {localStorage.setItem(key, JSON.stringify(data)); return data;}

function getItem(key) {
    let item = localStorage.getItem(key);
    if (item != null && item != undefined && item != "null" && item != "undefined" && item != "") {return JSON.parse(item);}
    return null;
}

export function saveSettings(data) {return saveItem("Settings", data);}
export function getSettings() {return getItem("Settings");}

export function saveThemes(data) {return saveItem("Themes", data);}
export function getThemes() {return getItem("Themes");}