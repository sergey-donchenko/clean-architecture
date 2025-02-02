import AppConfig from "./app";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  datasourceUrl: AppConfig.databaseUrl
});