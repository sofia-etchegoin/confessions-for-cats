export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('confession').del()

  // Inserts seed entries
  await knex('confession').insert([
    { id: 1, name: 'banana' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'feijoa' },
  ])
}
