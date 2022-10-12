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

    if (foundUrl) return { find: true, message: foundUrl.original };
    else return { find: false, message: "nOt fOuNd !!! ;p" };
  }
  return { find: false, message: "eRRor Req !!! ;p" };
};

export default { serviceShortenUrl, serviceRedirect };
