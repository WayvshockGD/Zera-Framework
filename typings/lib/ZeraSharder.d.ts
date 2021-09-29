import Eris from "eris";
import { Master } from "eris-sharder";
export interface SharderOptions {
    clientOptions: Eris.ClientOptions;
    shards?: number | undefined;
    firstShardID?: number | undefined;
    lastShardID?: number | undefined;
    clusters?: number | undefined;
    clusterTimeout?: number | undefined;
    stats?: boolean | undefined;
    statsInterval?: number | undefined;
    name?: string | undefined;
    guildsPerShard?: number | undefined;
    webhooks?: {
        cluster?: any;
        shard?: any;
    } | undefined;
    debug?: boolean | undefined;
}
export declare class ZeraSharder extends Master {
    constructor(token: string, options: SharderOptions);
}
