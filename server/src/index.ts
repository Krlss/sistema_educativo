import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
const morgan = require("morgan");
import router = require("./api/routes");
import dbInit = require("./database")
dotenv.config();
const port = 3001;

dbInit();

export const get = () => {
  const app: Application = express();
  app.set("port", port);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
 
  app.use('/api', router);
  app.use(morgan("combined"));
  app.use(express.static("src/uploads"));

  return app;
};

export const start = () => {
  const app = get()
  try {
      app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`)
      })
  } catch (error: any) {
      console.log(`Error occurred: ${error.message}`)
  }
}

start();



