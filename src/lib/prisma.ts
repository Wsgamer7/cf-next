import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient(); // 直接使用本地连接（读取 .env 中的 DATABASE_URL）
} else {
  // 本地 PostgreSQL 配置
  // Serverless Neon 配置
  neonConfig.webSocketConstructor = ws;

  const connectionString = process.env.DATABASE_URL!;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  prisma = new PrismaClient({ adapter });
}

export default prisma;
