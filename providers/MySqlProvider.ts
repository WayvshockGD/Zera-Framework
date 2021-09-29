import knex, { Knex } from "knex";

export = class MySqlProvider {
    public options: Knex;

    public constructor(options: Knex) {
        this.options = options;
    }

    public connect() {
        return knex(this.options);
    }
}