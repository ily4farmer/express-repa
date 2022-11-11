import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.addUser);
userRouter.delete("/", userController.deleteUser);

export default userRouter;
