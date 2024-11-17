/**
 * @license Shikai
 * lang/index.js
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {credits} from "./credits";
import {query} from "../js/Tools/Dictionary";

import english from "./eng";
import spanish from "./spa";
import japanesse from "./jap";
import arab from "./arb";
import german from "./ger";
import french from "./fre";

// New languages here
import portuguese from "./por"

export const langs = [english, spanish, japanesse, arab, german, french, portuguese /*New languages here*/];
export const names = langs.map(lang => lang.names.long);
export const data = function() {
    let _data = {get(lang, path) {return query(this[lang], path);}};
    langs.forEach((lang) => {_data[lang.names.long] = lang.data;})
    return _data;
}();

let lang;
export function get_lang() {return lang;}
export function set_lang(_lang) {lang = _lang;}
