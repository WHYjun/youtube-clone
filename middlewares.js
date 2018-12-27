import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube Clone";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
