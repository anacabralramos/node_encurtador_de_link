import { Request, Response } from "express";
import service from "./service";

const shortenUrl = async (request: Request, response: Response) => {
  const { newUrl } = request.body;
  const result = await service.serviceShortenUrl(newUrl);
  response.status(200).json({ newUrl: `http://localhost:3333/${result}` });
};

const redirect = async (request: Request, response: Response) => {
  const { url } = request.params;
  const result = await service.serviceRedirect(url);
  if (result.find) {
    console.log(result.message);
    return response.redirect(`${result.message}`);
  } else return response.status(400).json({ message: `${result.message}` });
};

export default { shortenUrl, redirect };
