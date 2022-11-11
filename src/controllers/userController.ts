import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { User } from "../models/models";

class userContoller {
    async getUser(req: Request, res: Response, next: NextFunction) {
        const users = await User.findAll();
        return res.json(users);
    }

    async addUser(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.badRequest("not properties name"));
        }
        const list = await User.create({
            name
        });
        res.json(list);
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;

        if (!id) {
            return next(ApiError.badRequest("not properties id"));
        }

        const result = await User.destroy({
            where: {
                id: id
            }
        });

        res.json(result);
    }
}

export default new userContoller();
