const { DataTypes, Model } = require("sequelize");
const sequelize  = require("../database/index.js");


class User extends Model {}
User.init({

    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CI: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, { sequelize, modelName: "users" });


exports.default= User;
