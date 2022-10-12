import { Request, Response, NextFunction } from "express";

class urlMiddleware {
  public releaseGet(request: Request, response: Response, next: NextFunction) {
    const token = request.params;

    if (token.url.length != 6) {
      return response.status(401).send({ message: "InVáLiD uRl  !!! ;p" });
    }
    return next();
  }
}

export default new urlMiddleware();
