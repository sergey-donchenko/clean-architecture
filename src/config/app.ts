import dotenv from "dotenv";
import * as process from "node:process";

dotenv.config();

export default class AppConfig {
  static get port(): number {
    return parseInt(process.env.PORT || "3000", 10);
  }

  static get databaseUrl(): string {
    return process.env.DATABASE_URL || "";
  }
}