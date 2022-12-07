exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("channel").del();
  await knex("video").del();

  await knex("channel").insert([
    { id: 1, name: "BEST VIDEO" },
    { id: 2, name: "GOLD COLLECTION" },
    { id: 3, name: "MUSIC CHANNEL" },
    { id: 4, name: "EDUCATION CHANNEL" },
  ]);

  await knex("user").insert([
    { id: 1, name: "Misha", email: "misha1@ya.ru", channel_id: 1 },
    { id: 2, name: "Pasha", email: "pasha2@ya.ru", channel_id: 2 },
    { id: 3, name: "Biktor", email: "viktor3@ya.ru", channel_id: 3 },
    { id: 4, name: "Elena", email: "lena4@ya.ru", channel_id: 4 },
  ]);

  await knex("video").insert([
    { id: 1, title: "Mish_1", channel_id: 1 },
    { id: 2, title: "Pasha", channel_id: 2 },
    { id: 3, title: "Bikt_33", channel_id: 3 },
    { id: 4, title: "Elena1", channel_id: 4 },
    { id: 5, title: "Misha1", channel_id: 1 },
    { id: 6, title: "Pasha1", channel_id: 2 },
    { id: 7, title: "Biktor_33", channel_id: 3 },
    { id: 8, title: "Elena33", channel_id: 3 },
  ]);
};
