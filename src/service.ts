import { Request, Response } from "express";
import repository from "./repository";

const serviceShortenUrl = (newUrl: string) => {
  try {
    const crypto = require("crypto");
    const shortedUrl = crypto.randomBytes(3).toString("hex");

    const file: any = JSON.parse(repository.repositoryRead());
    const obj = {
      ...file,
    };
    obj[shortedUrl] = newUrl;

    const data = JSON.stringify(obj);
    repository.repositoryWrite(data);

    console.log("Escrito com suceeesso :D");
    return shortedUrl;
  } catch (error: any) {
    return error.message;
  }
};

const serviceRedirect = (url: string) => {
  const data: any = JSON.parse(repository.repositoryRead());
  if (data[url]) {
    console.log("Lido com suceeesso :D");
    return { find: true, message: data[url] };
  }
  return { find: false, message: "Não foi possível ler este arquivo :/" };
};

export default { serviceShortenUrl, serviceRedirect };
