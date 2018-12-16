import express from "express";
import routes from "./routes";
import {
  videoDetail,
  uploadVideo,
  editVideo,
  deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.uploadVideo, uploadVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
