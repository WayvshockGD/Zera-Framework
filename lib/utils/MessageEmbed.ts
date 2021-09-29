import { ColorResolvable, Util } from "discord.js";
import Eris from "eris"

export = class MessageEmbed {
    public data: Eris.EmbedOptions;

    public constructor() {
        this.data = {};
    }

    public setTitle(title: string) {
        this.data["title"] = title;
        return this;
    }

    public setAuthor(author: Eris.Embed["author"]) {
        this.data["author"] = author;
        return this;
    }

    public setDescription(desc: string) {
        this.data["description"] = desc;
        return this;
    }

    public setFields(fields: Eris.Embed["fields"]) {
        this.data["fields"] = fields;
        return this;
    }

    public setColor(color: ColorResolvable) {
        let madeColor;

        if (typeof color === "string") {
            madeColor = Util.resolveColor(color);
        } else if (typeof color === "number") {
            madeColor = color;
        }

        this.data["color"] = madeColor;
        return this;
    }

    public setFooter(footer: Eris.Embed["footer"]) {
        this.data["footer"] = footer;
        return this;
    }

    public create() {
        return this.data;
    }
}