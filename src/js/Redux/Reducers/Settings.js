/**
 * @license Shikai
 * Settings.js
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

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