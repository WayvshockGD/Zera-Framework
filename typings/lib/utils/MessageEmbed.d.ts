import { ColorResolvable } from "discord.js";
import Eris from "eris";
declare const _default: {
    new (): {
        data: Eris.EmbedOptions;
        setTitle(title: string): any;
        setAuthor(author: Eris.Embed["author"]): any;
        setDescription(desc: string): any;
        setFields(fields: Eris.Embed["fields"]): any;
        setColor(color: ColorResolvable): any;
        setFooter(footer: Eris.Embed["footer"]): any;
        create(): Eris.EmbedOptions;
    };
};
export = _default;
