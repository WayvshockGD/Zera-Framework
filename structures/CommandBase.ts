import Eris from "eris";
import { CommandCtx } from "../types/Command";

export = class CommandBase<args> {
    cb: ({}: CommandCtx<args>) => Promise<string | Eris.MessageContent>;

    constructor(fn: ({}: CommandCtx<args>) => Promise<string | Eris.MessageContent>) {
        this.cb = fn;
    }

    public execute(ctx: CommandCtx<args>) {
        this.cb(ctx);
    }
}