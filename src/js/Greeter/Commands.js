import {types, notify} from "./Notifications"

function execute(bool, message, callback) {
    if (bool) {
        notify(message, types.Info);
        setTimeout(() => {callback();}, 1000);
    }
}

export function sleep() {return execute(window.lightdm.can_suspend, "Taking a nap...", window.lightdm.sleep)}
export function restart() {return execute(window.lightdm.can_restart, "Restarting...", window.lightdm.restart)}
export function shutdown() {return execute(window.lightdm.can_shutdown, "Shutting down...", window.lightdm.shutdown)}
export function hibernate() {return execute(window.lightdm.can_hibernate, "Hibernating...", window.lightdm.hibernate)}