import 'reflect-metadata';
import {AppDataSource} from './config/typeorm';

import { start } from "./app";
async function main() {
  const app =await start();
  app.listen(8000);
  console.log('Server corriendo en puerto 3000');
}

main();
