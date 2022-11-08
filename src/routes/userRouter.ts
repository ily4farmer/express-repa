import { Request, Response, Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router()

userRouter.get('/', userController.getUser)

export default userRouter