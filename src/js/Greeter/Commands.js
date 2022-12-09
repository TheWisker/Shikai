function execute(bool, message, callback) {
    if (bool) {
        //window.notifications.generate(message);
        setTimeout(function () {
            callback();
        }, 1000);
    }
    return bool;
    //window.notifications.generate(`${ command } is disabled on this system.`, "error");
}
/*
export function sleep() {return execute(window.lightdm.can_suspend, "Taking a nap...", window.lightdm.sleep)}
export function restart() {return execute(window.lightdm.can_restart, "Restarting...", window.lightdm.restart)}
export function shutdown() {return execute(window.lightdm.can_shutdown, "Shutting down...", window.lightdm.shutdown)}
export function hibernate() {return execute(window.lightdm.can_hibernate, "Hibernating...", window.lightdm.hibernate)}*/

export function sleep() {
    return execute(true, "Taking a nap...", function () {
        console.log("Taking a nap...");
    });
}
export function restart() {
    return execute(true, "Restarting...", function () {
        console.log("Restarting...");
    });
}
export function shutdown() {
    return execute(true, "Shutting down...", function () {
        console.log("Shutting down...");
    });
}
export function hibernate() {
    return execute(true, "Hibernating...", function () {
        console.log("Hibernating...");
    });
}