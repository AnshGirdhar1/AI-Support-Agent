import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex) {
  return knex.schema.createTable("messages", (table) => {
    table.increments("id").primary();
    table.integer("conversationId").unsigned().notNullable();
    table.foreign("conversationId").references("id").inTable("conversations");
    table.enum("sender", ["user", "ai"]).notNullable();
    table.string("text").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex) {
  return knex.schema.dropTable("messages");
};
