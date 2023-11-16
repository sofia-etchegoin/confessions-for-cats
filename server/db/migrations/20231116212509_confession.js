export async function up(knex) {
  return knex.schema.createTable('confession', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('confessionContent')
    table.integer('datePosted')
    table.bool('isEdited')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('confession')
}
