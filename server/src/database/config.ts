



import { Dialect, Sequelize } from 'sequelize'

const dbName = 'sistema_educativo' as string
const dbUser = 'postgres' as string;
const dbHost = 'localhost';
const dbDriver = 'postgres' as Dialect;
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

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

/* sequelize.sync({ alter: true }).then(() => "Database created");  */

export default sequelize;

