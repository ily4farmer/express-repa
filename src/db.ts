import { Dialect, Sequelize } from "sequelize"
import dotenv, { config } from 'dotenv'
dotenv.config()


const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DIALECT as Dialect
const dbPassword = process.env.DB_PASSWORD


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
})

export default sequelize