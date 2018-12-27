// GLOBAL URL
const HOME = "/";
const JOIN = "/join";
const signin = "/signin";
const signout = "/signout";
const SEARCH = "/search";

// USERS URL
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// VIDEOS URL
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// ROUTES
const routes = {
  home: HOME,
  join: JOIN,
  signin: signin,
  signout: signout,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  uploadVideo: UPLOAD_VIDEO,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
