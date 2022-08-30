

const { Sequelize } = require("sequelize");

/*export const sequelize = new Sequelize('moodidiomas2', 'postgres', 'moodutm', {
  host: 'localhost',
  dialect: 'postgres'
});*/

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

var sequelize = new Sequelize(
  'SISTEMA_EDUCATIVO',
  'postgres',
  'root',
  {
      host: 'psql_app',
      dialect: 'postgres',
      omitNull: true,
      pool: {
          max: 5,
          min: 0,
          require: 30000,
          idle: 10000
      },
  }
);
sequelize.sync({ alter: true }).then(() => "Database created"); 
module.exports = sequelize;

