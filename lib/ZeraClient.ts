import { APIMessage } from "discord-api-types";
import Eris from "eris";
import { IZeraConfig } from "../types/Client";
import ExtendedMessage from "./extensions/ExtendedMessage";
import Logger from "./utils/Logger";
import ZeraCaches from "./ZeraCaches";
import { SharderOptions, ZeraSharder } from "./ZeraSharder";

export interface ExtendedEvents<T> extends Eris.ClientEvents<T> {
    (event: "message", listener: (message: ExtendedMessage) => void): T;
}

export class ZeraClient extends Eris.Client {
    public prefix: string | "z?" | undefined;
    public token: string;
    public logger: Logger;
    public caches: ZeraCaches;

    on: ExtendedEvents<this> = super.on; 

    constructor(token: string, config?: IZeraConfig, erisConfig?: Eris.ClientOptions) {
        super(token, erisConfig);

        this.token = token;

        this.logger = new Logger();

        this.caches = new ZeraCaches();

        this.prefix = (config?.useDefaultPrefix) ? "z?" : config?.prefix;

        this.on("rawWS", (packet) => {
            if (packet.t === "MESSAGE_CREATE") {
                // @ts-ignore
                let data: Eris.BaseData = packet.d;

                this.emit("message", new ExtendedMessage(data, this));
            }
        })
    }

    public createSharder(options: SharderOptions) {
        return new Promise<ZeraSharder>((resolve, reject) => {
            try {
                resolve(new ZeraSharder(this.token, options))
            } catch (error) {
                reject(error);
            }
        })
    }

    public createMessage(id: string, content: Eris.AdvancedMessageContent | string) {
        return new Promise<Eris.Message<Eris.TextableChannel>>((resolve, reject) => {
            super.createMessage(id, content).then(msg => {
                resolve(msg);
            })
            .catch(err => reject(err));
        })
    }
}