export default class Idle {
    constructor(dispatch, timeout) {
        this.dispatch = dispatch;
        this.timeout = timeout;
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.idle = this.idle.bind(this);
        this.start();
    }

    start() {
        this.reset();
        this.ignore(this.start);
        this.listen(this.reset);
        this.dispatch({type: "Stop_Event", key: "inactivity"});
    }

    listen(event) {
        window.addEventListener("load", event);
        document.addEventListener("mousemove", event);
        document.addEventListener("keydown", event);
    }

    ignore(event) {
        window.removeEventListener("load", event);
        document.removeEventListener("mousemove", event);
        document.removeEventListener("keydown", event);
    }

    idle() {
        this.dispatch({type: "Start_Event", key: "inactivity"});
        this.ignore(this.reset);
        this.listen(this.start);
    }
    
    reset() {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.idle, this.timeout);
    }
}