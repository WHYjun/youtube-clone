import express from "express";
import routes from "./routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.search, search);
homeRouter.get(routes.join, join);
homeRouter.get(routes.login, login);
homeRouter.get(routes.logout, logout);

export default homeRouter;
