import Eris from "eris";
import ExtendedMessage from "../lib/extensions/ExtendedMessage";
import { ZeraClient } from "../lib/ZeraClient";
import { IPromise } from "./Promises";
export interface CommandData {
    name: string;
    description: string;
    enabled?: boolean;
    level: "ADMIN" | "OWNER" | "DEV";
    permissions: Array<keyof Eris.Constants["Permissions"]>;
    [key: string]: any;
}
export declare type promise = Promise<string | Eris.MessageContent>;
export interface CommandCtx<A> {
    message: ExtendedMessage;
    client: ZeraClient;
    promises: {
        resolve: IPromise["resolve"];
        reject: IPromise["reject"];
    };
    args: {
        raw: string[];
        has: A;
    };
}
