import { Router } from "express";
import adminController from "../controllers/adminController";

const adminRouter = Router();

adminRouter.get("/categories", adminController.getAllCategories);
adminRouter.get("/categories/:id", adminController.getCategory);
adminRouter.post("/categories", adminController.addCategory);

export default adminRouter;
