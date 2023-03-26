export const types = {Info: "info", Success: "success", Warning: "warning", Error: "error"}
const root = document.getElementById("notificationroot");

if (window.__is_debug === true) {
    setTimeout(() => {
        notify("Info notification!", types.Info);
        setTimeout(() => {
            notify("Success notification!", types.Success);
            setTimeout(() => {
                notify("Warning notification!", types.Warning);
                setTimeout(() => {
                    notify("Error notification!", types.Error);
                }, 500);
            }, 500);
        }, 500);
    }, 1500);
}

export function notify(msg, type) {
    let nt = document.createElement('div');
    nt.className = "notification " + type;
    nt.innerText = msg;
    root.appendChild(nt);
    setTimeout(() => {
        nt.style.opacity = 1;
        setTimeout(() => {
            nt.style.opacity = 0;
            setTimeout(() => {root.removeChild(nt)}, 500);
        }, 2000);
    }, 100);
}
