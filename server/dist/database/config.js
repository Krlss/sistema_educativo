"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = 'sistema_educativo';
const dbUser = 'postgres';
const dbHost = 'localhost';
const dbDriver = 'postgres';
const dbPassword = 'root';
/*export const sequelize = new Sequelize(
    {
        database: "moodidiomas2",
        username: "moodidiomas2",
        password: "pass123",
        host: "192.168.2.40",
        port: 5432,
        dialect: "postgres",
        /* dialectOptions: {
          ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
          }
        },
      }
);
*/
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
});
/* sequelize.sync({ alter: true }).then(() => "Database created");  */
exports.default = sequelize;
