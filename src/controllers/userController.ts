import { NextFunction, Request, Response } from "express";


interface IUsers {
    id: number,
    name: string,
    lastName: string
}

let users: IUsers[] = [
    {id: 1, name: 'Lexa', lastName: 'Modin'}
]

class userContoller {

    async getUser(req: Request, res: Response, next: NextFunction) {
        // console.log(this.users);
        
        res.status(200).json({users: users})
    }

    async addUser(req: Request, res: Response) {
        const {name, lastName} = req.body
        users.push({id: Date.now(), name, lastName})
        res.status(200).json({users: users})
    }
}

export default new userContoller()