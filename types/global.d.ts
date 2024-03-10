import { PrismaClient } from "@prisma/client";

// NodeJSのグローバル名前空間を拡張
declare global {
  var prisma: PrismaClient | undefined;
}
