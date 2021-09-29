import Eris from "eris";
export interface IPromise {
    resolve: (content: string | Eris.MessageContent) => void;
    reject: (content: string) => void;
}
