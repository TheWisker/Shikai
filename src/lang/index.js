import {query} from "../js/Tools/Dictionary";

import english from "./eng";
import spanish from "./spa";
import japanesse from "./jap";
import german from "./ger";
import french from "./fre";

export const langs = [english, spanish, japanesse, german, french];
export const names = langs.map(lang => lang.names.long);
export const data = function() {
    let _data = {get(lang, path) {return query(this[lang], path);}};
    langs.forEach((lang) => {_data[lang.names.long] = lang.data;})
    return _data;
}();

let lang;
export function get_lang() {return lang;}
export function set_lang(_lang) {lang = _lang;}
//console.log("Data", data);