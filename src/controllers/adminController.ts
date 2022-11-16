import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { Product, Сategory } from "../models/models";

class adminController {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        const result = await Сategory.findAll();
        res.json({ categories: result });
    }

    async getCategory(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id as string;

        if (!id) {
            return next(ApiError.badRequest("не указан id"));
        }
        const result = await Сategory.findByPk(id).then((category) => {
            if (!category) {
                return next(ApiError.badRequest("категория не найдена"));
            }
            return category;
        });

        res.json({ category: result });
    }

    async addCategory(req: Request, res: Response, next: NextFunction) {
        const { typeProduct } = req.body;
        if (!typeProduct) {
            return next(ApiError.badRequest("не указан тип продукта"));
        }

        const result = await Сategory.create({
            typeProduct
        });

        res.json(result);
    }

    async getAllProducts(req: Request, res: Response, next: NextFunction) {
        const users = await Product.findAll();
        return res.json({ users: users });
    }

    async addProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body;
            if (!name) {
                return next(ApiError.badRequest("not properties name"));
            }
            await Product.create({
                typeProduc: name
            }).then((result) => {
                console.log(result);
                res.json({ mess: result });
            });
        } catch (error) {
            return next(ApiError.badRequest("fdsf"));
        }
    }
}

export default new adminController();
