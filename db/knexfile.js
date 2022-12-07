// Update with your config settings.

const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "objection_db",
      user: "root",
      password: "",
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
    ...knexSnakeCaseMappers(),
  },
};

// npx knex migrate:make init
