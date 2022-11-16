import { Router } from "express";
import productController from "../controllers/productController";

const productRouter = Router();

productRouter.get("/", productController.getUser);
productRouter.post("/", productController.addUser);
productRouter.delete("/", productController.deleteUser);

export default productRouter;
