export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('confession').del()

  // Inserts seed entries
  await knex('confession').insert([
    {
      title: 'Blog day 1',
      confessionContent:
        "I scratched the couch, and friggen' loved it. Sorry not sorry.",
      datePosted: 1495083077243,
      isEdited: 0,
    },
    {
      title: 'Blog day 2',
      confessionContent:
        "I scratched the beard, and friggen' loved it. Sorry not sorry.",
      datePosted: 1495083077243,
      isEdited: 0,
    },
    {
      title: 'This is my updated post',
      datePosted: 1495083077243,
      confessionContent: 'I coughed up a hairball in front of my crush.',
      isEdited: 0,
    },
    {
      title: 'This is my post',
      datePosted: 1495083077243,
      confessionContent:
        'I pushed a mug off the table. And maintained eye-contact with my owner.',
      isEdited: 0,
    },
  ])
}
