import { NextFunction, Request, Response } from "express";


interface IUsers {
    id: number,
    name: string,
    lastName: string
}

class userContoller {
    users: IUsers[] = [
        {id: 1, name: 'Lexa', lastName: 'Modin'}
    ]

    async getUser(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({message: 'controller'})
    }

    async addUser(req: Request, res: Response) {

    }
}

export default new userContoller()