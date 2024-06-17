import { PrismaClient } from "@prisma/client";

// NodeJSのグローバル名前空間を拡張
declare global {
  // https://stackoverflow.com/questions/69850598/how-to-resolve-this-typescript-error-on-global-node-js-object/69851359#69851359
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
