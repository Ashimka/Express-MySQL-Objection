exports.up = function (knex) {
  return knex.schema
    .createTable("channel", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.timestamps(false, true);
    })
    .createTable("user", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.integer("channel_id").unsigned().notNullable();
      table
        .foreign("channel_id")
        .references("id")
        .inTable("channel")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(false, true);
    })
    .createTable("video", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.integer("channel_id").unsigned().notNullable();
      table
        .foreign("channel_id")
        .references("id")
        .inTable("channel")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(false, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("video")
    .dropTableIfExists("user")
    .dropTableIfExists("channel");
};
