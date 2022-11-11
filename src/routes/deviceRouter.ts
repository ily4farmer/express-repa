import { Router } from "express";
import deviceController from "../controllers/deviceController";

const deviceRouter = Router();

deviceRouter.get("/", deviceController.getAllCompanies);
deviceRouter.get("/:name", deviceController.getCompany);
deviceRouter.post("/", deviceController.createCompany);

export default deviceRouter;
