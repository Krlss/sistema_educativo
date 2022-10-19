import "reflect-metadata"
import {DataSource} from 'typeorm'
import path from "path";

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT || "27017";
const DATABASE = process.env.DB_DATABASE;

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: HOST,
    port: parseInt(PORT),
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        path.join(__dirname, "../entities/**.ts")
       
    ],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("Conectado a la base de datos");
    })
    .catch((error) => console.log(error))