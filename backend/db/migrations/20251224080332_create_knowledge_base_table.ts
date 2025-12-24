import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex) {
  return knex.schema.createTable("knowledge_base", (table) => {
    table.increments("id").primary();
    table.string("category").notNullable();
    table.text("question").notNullable();
    table.text("answer").notNullable();
    table.specificType("keywords", "text[]");
    table.boolean("is_active").defaultTo(true);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex) {
  return knex.schema.dropTable("knowledge_base");
};
