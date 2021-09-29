import Collection from "@discordjs/collection"
import { CommandData } from "../types/Command";

export = class ZeraCaches {
    public commands = new Collection<string, CommandData>();
}