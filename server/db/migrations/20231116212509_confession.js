/**
 * @param {import('knex').Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
  return knex.schema.createTable('confession', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('confessionContent')
    table.datetime('datePosted').defaultTo(knex.fn.now())
    table.bool('isEdited')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('confession')
}
