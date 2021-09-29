"use strict";
const discord_js_1 = require("discord.js");
module.exports = class MessageEmbed {
    data;
    constructor() {
        this.data = {};
    }
    setTitle(title) {
        this.data["title"] = title;
        return this;
    }
    setAuthor(author) {
        this.data["author"] = author;
        return this;
    }
    setDescription(desc) {
        this.data["description"] = desc;
        return this;
    }
    setFields(fields) {
        this.data["fields"] = fields;
        return this;
    }
    setColor(color) {
        let madeColor;
        if (typeof color === "string") {
            madeColor = discord_js_1.Util.resolveColor(color);
        }
        else if (typeof color === "number") {
            madeColor = color;
        }
        this.data["color"] = madeColor;
        return this;
    }
    setFooter(footer) {
        this.data["footer"] = footer;
        return this;
    }
    create() {
        return this.data;
    }
};
