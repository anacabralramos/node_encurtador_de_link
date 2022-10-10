import repository from "./repository";

const serviceShortenUrl = async (newUrl: string) => {
  try {
    const crypto = require("crypto");
    const shortedUrl = crypto.randomBytes(3).toString("hex");

    const obj = {
      original: `${newUrl}`,
      shortened: `${shortedUrl}`,
    };
    repository.repositoryWrite(obj);
    console.log("Escrito com suceeesso :D");

    return shortedUrl;
  } catch (error: any) {
    return error.message;
  }
};

const serviceRedirect = async (url: string) => {
  const data: any = await repository.repositoryRead(url);

  if (data) {
    const foundUrl = data.find((element: any) => true);
    console.log("Lido com suceeesso :D");
    return { find: true, message: foundUrl.original };
  }
  return { find: false, message: "Não foi possível ler este arquivo :/" };
};

export default { serviceShortenUrl, serviceRedirect };
