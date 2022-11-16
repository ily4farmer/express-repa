import { Router } from "express";
import adminContoller from "../controllers/adminContoller";

const adminRouter = Router();

adminRouter.get("/category", adminContoller.getAllCategories);
adminRouter.get("/category/:id", adminContoller.getCategory);
adminRouter.post("/category", adminContoller.addCategory);
adminRouter.put("/category", adminContoller.updateNameCategory);
adminRouter.delete("/category", adminContoller.deleteCategory);

adminRouter.get("/product/:id", adminContoller.getAllProduct);

export default adminRouter;
