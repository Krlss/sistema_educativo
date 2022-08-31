import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from "../config";

interface UserAttributes{
    ID: number, 
    CI: string, 
    username: string, 
    password: string, 
    email: string, 
    rol: string, 
    image?: string
}

export interface UserInput extends Optional<UserAttributes, 'ID' | 'CI'> {}
export interface UserOuput extends Required<UserAttributes> {}

class User  extends Model <UserAttributes, UserInput> implements UserAttributes {
    public ID!: number;
    public CI!: string;
    public username!: string;
    public password!: string;
    public email!: string;
    public rol!: string;
    public image!: string;
     
}
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
    email: {
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
}, { 
    sequelize,
    modelName: "users",
    paranoid: true
 }); 

export default User;