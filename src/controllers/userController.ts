import { NextFunction, Request, Response } from "express";
import { User } from "../models/models";

class userContoller {
    async getUser(req: Request, res: Response, next: NextFunction) {
        const users = await User.findAll()
        return res.json(users)
    }
    async addUser(req: Request, res: Response) {
        const {name} = req.body
        const list = await User.create({
            name
        })
        res.json(list)
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.body

        const result = await User.destroy({where: {
            id: id
        }})

        res.json(result)

    }
}

export default new userContoller()