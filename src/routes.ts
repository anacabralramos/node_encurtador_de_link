import { Router } from "express";
import controller from "./controller";

const knex = require("./database/connection");
const routes = Router();

routes.post("/shorten", controller.shortenUrl);
routes.get("/:url", controller.redirect);
// routes.get("/:url", async (req, res) => {
//   const results = await knex("urls");
//   return res.json(results);
// });

// (req, res) => {
//   const { name } = req.body;
//   //   console.log("O nome");
//   return res.json({
//     name,
//   });
// };

export { routes };
