"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeraSharder = void 0;
const eris_sharder_1 = require("eris-sharder");
const posix_1 = __importDefault(require("path/posix"));
class ZeraSharder extends eris_sharder_1.Master {
    constructor(token, options) {
        super(token, posix_1.default.join(__dirname, "ZeraClient"), options);
    }
}
exports.ZeraSharder = ZeraSharder;
