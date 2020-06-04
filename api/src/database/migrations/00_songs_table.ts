import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('songs', table => {
    table.increments('id').primary();
    table.string('author').notNullable();
    table.string('song').notNullable();
    table.string('song_url').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('songs');
}
