/*
    동영상들에 대한 처리를 할 Router
*/

import express from "express";
import routes from "../routes";
import {
  getUpload,
  videoDetail,
  deleteVideo,
  postUpload,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Uploads
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
