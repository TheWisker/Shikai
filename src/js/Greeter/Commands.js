import {types, notify} from "./Notifications"

function execute(bool, message, callback) {
    if (bool) {
        notify(message, types.Info);
        if (window.__is_debug != true) {setTimeout(() => {callback();}, 1000);}
    } else {notify("Action not available!", types.Warning);}
}

export function sleep() {return execute(lightdm.can_suspend, "Taking a nap...", lightdm.sleep);}
export function restart() {return execute(lightdm.can_restart, "Restarting...", lightdm.restart);}
export function shutdown() {return execute(lightdm.can_shutdown, "Shutting down...", lightdm.shutdown);}
export function hibernate() {return execute(lightdm.can_hibernate, "Hibernating...", lightdm.hibernate);}