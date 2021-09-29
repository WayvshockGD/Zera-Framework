"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const knex_1 = __importDefault(require("knex"));
module.exports = class MySqlProvider {
    options;
    constructor(options) {
        this.options = options;
    }
    connect() {
        return (0, knex_1.default)(this.options);
    }
};
