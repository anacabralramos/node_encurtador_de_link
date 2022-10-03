import { readFileSync, writeFileSync } from "fs";

const repositoryRead = () => {
  return readFileSync(
    "C:\\Users\\Ana Ramos\\Documents\\SOLUTIONS LAB\\first weak\\node_encurtador_de_link\\src\\data\\urls.json",
    { encoding: "utf8", flag: "r" }
  );
};

const repositoryWrite = (data: any) => {
  writeFileSync(
    "C:\\Users\\Ana Ramos\\Documents\\SOLUTIONS LAB\\first weak\\node_encurtador_de_link\\src\\data\\urls.json",
    data,
    { flag: "w" }
  );
};

export default { repositoryRead, repositoryWrite };
