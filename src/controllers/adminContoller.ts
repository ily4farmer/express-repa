import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { Category } from "../models/models";

class adminContoller {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        const categories = await Category.findAll();
        res.json({ categories: categories });
    }

    async getCategory(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        await Category.findByPk(id).then((response) => {
            if (response === null) {
                return next(ApiError.badRequest("not find category"));
            }
            return res.json({ category: response });
        });
    }

    async addCategory(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.badRequest("not properties name"));
        }
        await Category.create({
            type: name
        })
            .then((response) => res.json({ categories: response }))
            .catch((err) =>
                next(ApiError.badRequest(`${name} already in use`))
            );
    }

    async updateNameCategory(req: Request, res: Response, next: NextFunction) {
        const { id, name } = req.body;
        if (!id || !name) {
            return next(ApiError.badRequest("not properties id or name"));
        }

        await Category.update(
            { type: name },
            {
                where: {
                    id: id
                }
            }
        )
            .then((result) => res.json(result))
            .catch((err) => next(ApiError.badRequest(err.message)));
    }

    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;

        if (!id) {
            return next(ApiError.badRequest("not properties id"));
        }

        const result = await Category.destroy({
            where: {
                id: id
            }
        });

        res.json(result);
    }

    async getAllProduct(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        await Category.findByPk(id).then(async (category: any) => {
            if (!category)
                return next(ApiError.badRequest("not find category"));
            await category
                .getProduct()
                .then((result: any) => res.json({ product: result }))
                .catch((err: any) => next(ApiError.badRequest(err.message)));
        });
    }
}

export default new adminContoller();
