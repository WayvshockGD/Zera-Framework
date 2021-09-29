"use strict";
const eris_1 = require("eris");
module.exports = class ExtendedMessage extends eris_1.Message {
    constructor(data, client) {
        super(data, client);
    }
    reply(content) {
        if (typeof content === "string") {
            return this.channel.createMessage({
                content,
                messageReference: {
                    channelID: this.channel.id,
                    // @ts-ignore
                    guildID: this.channel.guild.id,
                    failIfNotExists: false,
                    messageID: this.id
                }
            });
        }
        else if (typeof content === "object") {
            return this.channel.createMessage({
                ...content,
                messageReference: {
                    channelID: this.channel.id,
                    // @ts-ignore
                    guildID: this.channel.guild.id,
                    failIfNotExists: false,
                    messageID: this.id
                }
            });
        }
    }
};
