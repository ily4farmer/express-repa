import { Router } from "express";
import adminContoller from "../controllers/adminContoller";

const adminRouter = Router();

adminRouter.get("/", adminContoller.getAllCategories);
adminRouter.get("/:id", adminContoller.getCategory);
adminRouter.post("/", adminContoller.addCategory);
adminRouter.delete("/", adminContoller.deleteCategory);

export default adminRouter;
