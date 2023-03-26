




if (!typeof(Storage) !== "undefined") {
    //window.notifications.generate("localStorage not supported. Theme unable to function!", 'error');
    //throw("localStorage not supported. Theme unable to function!");
}

class Storage {
    static save(id, data) {
        localStorage.setItem(id, JSON.stringify(data));
        return true;
    }

    static get(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}

export default class Entry {
    constructor(id, def) {
        this.id = id;
        this.def = def;
        console.log(this.get());
        if (this.get() == null) {
            this.save(this.def);
        }
    }

    save(data) {return Storage.save(this.id, data);}

    get() {return Storage.get(this.id);}
}