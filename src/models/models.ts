import { DataTypes } from "sequelize"
import sequelize from "../db"

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true,},
})
    

export const models = {
    User
}

export const getModels = () => models