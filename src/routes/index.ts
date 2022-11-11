import { Router } from "express";
import deviceRouter from "./deviceRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/device", deviceRouter);

export default router;
