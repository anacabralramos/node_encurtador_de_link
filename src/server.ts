import path from "path";
import { routes } from "./routes";
// import express from "express";
import express from "express";

// criei um servidor
const server = express();

// agora entende as requisições json
server.use(express.json());

// 3333: porta
// callback dispara qnd o servidor é iniciado
server.listen(3333, () => {
  console.log("Helloo ;)");
});

server.use("/", routes);
server.use("/files", express.static(path.join(__dirname, "data")));
