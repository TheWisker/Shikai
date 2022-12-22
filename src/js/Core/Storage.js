export function saveItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}

export function getItem(key) {
    let item = localStorage.getItem(key);
    if (item != null) {return JSON.parse(item);}
    return undefined;
}

export function getTheme() {

}

export function saveTheme() {

}

export function removeTheme() {

}