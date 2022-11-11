import { DataTypes } from "sequelize";
import sequelize from "../db";

export const User = sequelize.define(
    "user",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: false }
    },
    { timestamps: false }
);

export const Basket = sequelize.define(
    "basket",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        abc: { type: DataTypes.STRING, unique: false }
    },
    { timestamps: false }
);

export const Company = sequelize.define(
    "company",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true }
    },
    { timestamps: false }
);

export const Product = sequelize.define(
    "product",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true },
        description: { type: DataTypes.STRING, unique: false }
    },
    {
        timestamps: false
    }
);

User.hasOne(Basket);
Basket.belongsTo(User);

Company.hasMany(Product, { onDelete: "cascade" });
// Product.belongsTo(Company);

export const models = {
    User,
    Basket,
    Company,
    Product
};

export const getModels = () => models;
