import path from "path";

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "admin",
      database: "database_urls",
    },
    migrations: {
      tableName: "migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};
