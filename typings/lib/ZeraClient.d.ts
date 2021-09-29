import Eris from "eris";
import { IZeraConfig } from "../types/Client";
import ExtendedMessage from "./extensions/ExtendedMessage";
import Logger from "./utils/Logger";
import ZeraCaches from "./ZeraCaches";
import { SharderOptions, ZeraSharder } from "./ZeraSharder";
export interface ExtendedEvents<T> extends Eris.ClientEvents<T> {
    (event: "message", listener: (message: ExtendedMessage) => void): T;
}
export declare class ZeraClient extends Eris.Client {
    prefix: string | "z?" | undefined;
    token: string;
    logger: Logger;
    caches: ZeraCaches;
    on: ExtendedEvents<this>;
    constructor(token: string, config?: IZeraConfig, erisConfig?: Eris.ClientOptions);
    createSharder(options: SharderOptions): Promise<ZeraSharder>;
    createMessage(id: string, content: Eris.AdvancedMessageContent | string): Promise<Eris.Message<Eris.TextableChannel>>;
}
