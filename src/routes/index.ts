import { Router } from "express";
import adminRouter from "./adminPouter";
import productRouter from "./productRouter";

const router = Router();

router.use("/product", productRouter);
router.use("/admin", adminRouter);

export default router;
