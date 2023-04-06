export const types = {Info: "info", Success: "success", Warning: "warning", Error: "error"}
const root = document.getElementById("notificationroot");

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
