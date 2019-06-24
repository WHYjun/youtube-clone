import express from 'express';
import routes from './routes';
import {
  videoDetail,
  getUploadVideo,
  editVideo,
  deleteVideo,
  postUploadVideo,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, postUploadVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
