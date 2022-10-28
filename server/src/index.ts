import 'reflect-metadata';

import { start } from "./app";
async function main() {
  const app =await start();
  app.listen(8000);
  console.log('Server corriendo en puerto 8000');
}

main();
