import express from 'express';
import userAuth from '../middlewares/userAuth.js';
import { getUserData } from '../controllers/userController.js'; // 👈 Example path

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;