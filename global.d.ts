import { Dialect } from "sequelize";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            DB_NAME: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_HOST: string;
            DB_DIALECT: Dialect
            DB_PORT: number;
            SECRET_KEY: string;
        }
    }
}

export {}