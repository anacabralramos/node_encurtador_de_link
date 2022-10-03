import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/shorten", controller.shortenUrl);
routes.get("/:url", controller.redirect);

// (req, res) => {
//   const { name } = req.body;
//   //   console.log("O nome");
//   return res.json({
//     name,
//   });
// };

export { routes };
