import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import homeRouter from "./routers/homeRouter";
import routes from "./routers/routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

// from middlewares
app.use(localsMiddleware);

// routes
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
