import { Request, Response, Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router()

userRouter.get('/', userController.getUser)
userRouter.post('/', userController.addUser)

export default userRouter