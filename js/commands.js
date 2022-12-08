//function window.lightdm.can_suspend ? ae("Suspending system.", window.lightdm.suspend) : window.notifications.generate("".concat(e, " is disabled on this system."), "error")


function execute(bool, message, callback) {
    if (bool) {
        //window.notifications.generate(message);
        setTimeout(() => {callback();}, 1000);
    }
    return bool
    //window.notifications.generate(`${ command } is disabled on this system.`, "error");
}



export function sleep() {return execute(window.lightdm.can_suspend, "Taking a nap...", window.lightdm.sleep)}
export function restart() {return execute(window.lightdm.can_restart, "Restarting...", window.lightdm.restart)}
export function shutdown() {return execute(window.lightdm.can_shutdown, "Shutting down...", window.lightdm.shutdown)}
export function hibernate() {return execute(window.lightdm.can_hibernate, "Hibernating...", window.lightdm.hibernate)}