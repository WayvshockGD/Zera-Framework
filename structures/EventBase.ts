export = class EventBase {
    public cb: (...args: any[]) => void;

    constructor(fn: (...args: any[]) => void) {
        this.cb = fn;
    }

    public create() {
        return this.cb;
    }
}