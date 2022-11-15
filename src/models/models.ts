import { DataTypes } from "sequelize";
import sequelize from "../db";

export const Category = sequelize.define(
    "category",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        type: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    { timestamps: false }
);

export const Product = sequelize.define(
    "product",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        logo: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING, allowNull: false, unique: true },
        price: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.STRING, defaultValue: "" }
    },
    { timestamps: false }
);

Category.hasMany(Product, { onDelete: "cascade" });
Product.belongsTo(Category);

export const models = {
    Category,
    Product
};

export const getModels = () => models;
