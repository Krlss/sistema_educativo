import "reflect-metadata"
import {DataSource} from 'typeorm'
import path from "path";

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "root",
    password: "",
    database: "sistema_educativo",
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