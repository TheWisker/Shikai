/**
 * @license Shikai
 * Commands.js
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {types, notify} from "./Notifications";
import {get_lang, data} from "../../lang";

function execute(bool, message, callback) {
    if (bool) {
        notify(message, types.Info);
        if (window.__is_debug != true) {setTimeout(() => {callback();}, 1000);}
    } else {notify(data.get(get_lang(), "commands.messages.unavailable"), types.Warning);}
}

export function sleep() {return execute(lightdm.can_suspend, data.get(get_lang(), "commands.messages.sleep"), lightdm.sleep);}
export function restart() {return execute(lightdm.can_restart, data.get(get_lang(), "commands.messages.reboot"), lightdm.restart);}
export function shutdown() {return execute(lightdm.can_shutdown, data.get(get_lang(), "commands.messages.shutdown"), lightdm.shutdown);}
export function hibernate() {return execute(lightdm.can_hibernate, data.get(get_lang(), "commands.messages.hibernate"), lightdm.hibernate);}