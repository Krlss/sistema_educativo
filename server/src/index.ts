import "reflect-metadata";

import { start } from "./app";

async function main() {
  const app = await start();
  const port = process.env.PORT || 8000;
  app.listen(port);
  console.log("Server corriendo en puerto", port);
}

main();
