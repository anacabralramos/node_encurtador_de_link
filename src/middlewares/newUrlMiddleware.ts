import { Request, Response, NextFunction } from "express";

class newUrlMiddleware {
  public releasePost(request: Request, response: Response, next: NextFunction) {
    const url = request.body;
    try {
      let newUrl = new URL(url.newUrl);
      return next();
    } catch (error) {
      return response.status(401).send({ message: "InVáLiD uRl  !!! ;p" });
    }
  }
}

export default new newUrlMiddleware();
