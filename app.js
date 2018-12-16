import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

app.get("/", (req, res) => res.send("Home"));
app.get("/profile", (req, res) => res.send("Profile"));
app.use("/user", userRouter);

export default app;
