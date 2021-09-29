import Eris from "eris";
import { CommandCtx } from "../types/Command";
declare const _default: {
    new <args>(fn: ({}: CommandCtx<args>) => Promise<string | Eris.MessageContent>): {
        cb: ({}: CommandCtx<args>) => Promise<string | Eris.MessageContent>;
        execute(ctx: CommandCtx<args>): void;
    };
};
export = _default;
