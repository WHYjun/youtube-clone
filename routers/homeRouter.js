import express from "express";
import routes from "./routes";
import { home, search } from "../controllers/videoController";
import { join, signin, signout } from "../controllers/userController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.search, search);
homeRouter.get(routes.join, join);
homeRouter.get(routes.signin, signin);
homeRouter.get(routes.signout, signout);

export default homeRouter;
