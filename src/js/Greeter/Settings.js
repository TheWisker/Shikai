const defaults = {
    "defaultUser": false
}

export function saveSetting(key, data = undefined) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
}

export function getSetting(key) {
    let item = localStorage.getItem(key);
    if (item != null) {return JSON.parse(item);}
    return defaults[key];
}

export function getTheme() {

}

export function saveTheme() {

}

export function removeTheme() {

}