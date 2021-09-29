"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
function formatTime() {
    let times = new Date();
    return `[${times.toISOString()}]`;
}
module.exports = class Logger {
    log(...content) {
        console.log(`${formatTime()} >> [${chalk_1.default.cyan("Log")}}] - ${content.join(" ")}`);
    }
    warn(...content) {
        console.warn(`${formatTime()} >> [${chalk_1.default.yellow("Warn")}] - ${content.join(" ")}`);
    }
    error(...content) {
        console.error(`${formatTime()} >> [${chalk_1.default.red("Error")}] - ${content.join(" ")}`);
    }
};
