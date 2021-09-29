"use strict";
module.exports = class CommandBase {
    cb;
    constructor(fn) {
        this.cb = fn;
    }
    execute(ctx) {
        this.cb(ctx);
    }
};
