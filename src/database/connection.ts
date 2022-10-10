import knex from "knex";
import path from "path";
const knexfile = require("../../knexfile");
const connection = require("knex")(knexfile["development"]);

module.exports = connection;
// const connection = knex({
//   client: "pg",
//   connection: {
//     host: "127.0.0.1",
//     port: 3306,
//     user: "postgres",
//     password: "admin",
//     database: "database_urls",
//   },
//   useNullAsDefault: true,
// });

// export default connection;

// import path from "path";

// module.exports = {
//   client: "pg",
//   connection: {
//     host: "127.0.0.1",
// port : 3306,
//     user: "postgres",
//     password: "admin",
//     database: "database_urls",
//   },
//   migrations: {
//     directory: path.resolve(__dirname, "src", "migrations"),
//   },
// };
