import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("urls", (table) => {
    table.increments("id").primary;
    table.string("original").notNullable();
    table.string("shortened").notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("urls");
}
