import express from 'express';
import routes from './routes';
import { home, search } from '../controllers/videoController';
import {
  getJoin,
  postJoin,
  getSignin,
  postSignin,
  signout,
} from '../controllers/userController';

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.search, search);
homeRouter.get(routes.join, getJoin);
homeRouter.post(routes.join, postJoin);
homeRouter.get(routes.signin, getSignin);
homeRouter.post(routes.signin, postSignin);
homeRouter.get(routes.signout, signout);

export default homeRouter;
