import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { Product } from "../models/models";

class productController {
    async getUser(req: Request, res: Response, next: NextFunction) {
        const users = await Product.findAll();
        return res.json(users);
    }

    async addUser(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.badRequest("not properties name"));
        }
        const list = await Product.create({
            name
        });
        res.json(list);
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;

        if (!id) {
            return next(ApiError.badRequest("not properties id"));
        }

        const result = await Product.destroy({
            where: {
                id: id
            }
        });

        res.json(result);
    }
}

export default new productController();
