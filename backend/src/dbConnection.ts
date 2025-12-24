import knex from "knex";
import config from "./knexfile";

const env = "development";

const db = knex(config[env]);

export default db;
