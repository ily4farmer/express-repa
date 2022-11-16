import { DataTypes } from "sequelize";
import sequelize from "../db";

export const Сategory = sequelize.define(
    "category",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        typeProduct: {
            type: DataTypes.STRING,
            unique: {
                name: "category",
                msg: "idcustomer duplicate"
            },
            allowNull: false
        }
    },
    { timestamps: false }
);

export const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    logo: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    productInfo: {
        type: DataTypes.STRING,
        unique: false,
        defaultValue: ""
    },
    price: { type: DataTypes.INTEGER, allowNull: false },
    sale: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
});

Сategory.hasMany(Product);
Product.belongsTo(Сategory);

export const models = {
    Сategory,
    Product
};

export const getModels = () => models;
