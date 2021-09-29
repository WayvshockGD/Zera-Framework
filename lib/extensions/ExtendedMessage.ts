import Eris, { Message } from "eris";
import { ZeraClient } from "../ZeraClient";

export = class ExtendedMessage extends Message {
    constructor(data: Eris.BaseData, client: ZeraClient) {
        super(data, client);
    }

    public reply(content: Eris.MessageContent | string) {
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
        } else if (typeof content === "object") {
            return this.channel.createMessage({
                ...content,
                messageReference: {
                    channelID: this.channel.id,
                    // @ts-ignore
                    guildID: this.channel.guild.id,
                    failIfNotExists: false,
                    messageID: this.id
                }
            })
        }
    }
}