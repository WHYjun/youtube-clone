import { videos } from '../db';
import routes from '../routers/routes';

export const home = (req, res) =>
  res.render('home', { pageTitle: 'Home', videos });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
};
export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' });

export const getUploadVideo = (req, res) =>
  res.render('uploadVideo', { pageTitle: 'Upload Video' });

export const postUploadVideo = (req, res) => {
  const { file, title, description } = req;
  res.redirect(routes.videoDetail(24));
};

export const editVideo = (req, res) =>
  res.render('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' });
