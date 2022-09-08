"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_js_1 = __importDefault(require("../database/index.js"));
class User extends sequelize_1.Model {
}
User.init({
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CI: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: index_js_1.default,
    modelName: "users",
    paranoid: true
});
exports.default = User;
