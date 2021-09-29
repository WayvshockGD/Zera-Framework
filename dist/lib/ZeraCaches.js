"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const collection_1 = __importDefault(require("@discordjs/collection"));
module.exports = class ZeraCaches {
    commands = new collection_1.default();
};
