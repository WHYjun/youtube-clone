import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("Home"));
userRouter.get("/profile", (req, res) => res.send("Profile"));
userRouter.get("/edit", (req, res) => res.send("Edit"));
