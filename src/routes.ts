import { Router } from "express";
import controller from "./controller";
import newUrlMiddleware from "./middlewares/newUrlMiddleware";
import urlMiddleware from "./middlewares/urlMiddleware";

const routes = Router();

routes.post("/shorten", newUrlMiddleware.releasePost, controller.shortenUrl);
routes.get("/:url", urlMiddleware.releaseGet, controller.redirect);
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
