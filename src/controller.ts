import { Request, Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import service from "./service";

const shortenUrl = (request: Request, response: Response) => {
  const { newUrl } = request.body;
  const result = service.serviceShortenUrl(newUrl);
  response.status(200).json({ newUrl: `http://localhost:3333/${result}` });
};

const redirect = (request: Request, response: Response) => {
  const { url } = request.params;
  const result = service.serviceRedirect(url);
  console.log(result);
  if (result.find) response.redirect(`${result.message}`);
  else response.status(400).json(`${result.message}`);
};

export default { shortenUrl, redirect };
