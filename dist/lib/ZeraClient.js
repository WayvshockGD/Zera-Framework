"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeraClient = void 0;
const eris_1 = __importDefault(require("eris"));
const ExtendedMessage_1 = __importDefault(require("./extensions/ExtendedMessage"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const ZeraCaches_1 = __importDefault(require("./ZeraCaches"));
const ZeraSharder_1 = require("./ZeraSharder");
class ZeraClient extends eris_1.default.Client {
    prefix;
    token;
    logger;
    caches;
    on = super.on;
    constructor(token, config, erisConfig) {
        super(token, erisConfig);
        this.token = token;
        this.logger = new Logger_1.default();
        this.caches = new ZeraCaches_1.default();
        this.prefix = (config?.useDefaultPrefix) ? "z?" : config?.prefix;
        this.on("rawWS", (packet) => {
            if (packet.t === "MESSAGE_CREATE") {
                // @ts-ignore
                let data = packet.d;
                this.emit("message", new ExtendedMessage_1.default(data, this));
            }
        });
    }
    createSharder(options) {
        return new Promise((resolve, reject) => {
            try {
                resolve(new ZeraSharder_1.ZeraSharder(this.token, options));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    createMessage(id, content) {
        return new Promise((resolve, reject) => {
            super.createMessage(id, content).then(msg => {
                resolve(msg);
            })
                .catch(err => reject(err));
        });
    }
}
exports.ZeraClient = ZeraClient;
