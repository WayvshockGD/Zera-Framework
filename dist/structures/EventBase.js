"use strict";
module.exports = class EventBase {
    cb;
    constructor(fn) {
        this.cb = fn;
    }
    create() {
        return this.cb;
    }
};
