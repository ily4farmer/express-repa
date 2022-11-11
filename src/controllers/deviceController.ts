import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { Company } from "../models/models";

class deviceController {
    async getCompany(req: Request, res: Response, next: NextFunction) {
        const { name } = req.params;
        if (!name) {
            return next(ApiError.badRequest("not name"));
        }

        const company = await Company.findOne({
            where: {
                name: name
            }
        });

        if (!company) {
            return next(ApiError.badRequest("not fing company"));
        }

        res.json({ company: company });
    }

    async getAllCompanies(req: Request, res: Response, next: NextFunction) {
        const companies = await Company.findAll();

        res.json({ companies: companies });
    }

    async createCompany(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.badRequest("not name"));
        }

        const companyName = await Company.create({ name });

        res.json({ company: companyName });
    }
}

export default new deviceController();
