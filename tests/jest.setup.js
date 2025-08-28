import path from "node:path";
import { execSync } from "node:child_process";
import dotenv from "dotenv";
import { AppDataSource } from "../src/database/config/data-source.js";
import serverControl from "../src/server/index.js";

// 1. Carrega dotenv do .env.test
dotenv.config({ path: path.resolve("./.env.test") });

console.log("Variáveis de ambiente carregadas para Jest:");
console.log({
  DB_USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
});

let server;

beforeAll(async () => {
  if (process.env.NODE_ENV === "test") {
    // Cria o banco de teste se não existir
    try {
      execSync(
        `docker exec -i postgres-db-ccb psql -U ${process.env.DB_USERNAME} -c "CREATE DATABASE ${process.env.DB_NAME};"`
      );
      console.log("Banco de teste criado com sucesso!");
    } catch (e) {
      if (e.message.includes("already exists")) {
        console.log("Banco de teste já existe.");
      } else {
        throw e;
      }
    }

    // Inicializa TypeORM
    await AppDataSource.initialize();

    // Inicia servidor em porta de teste
    server = await serverControl.startServer(4000);
  }
});

// Limpa dados antes de cada teste
beforeEach(async () => {
  if (process.env.NODE_ENV === "test") {
    const entities = AppDataSource.entityMetadatas;
    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name);
      await repository.query(`TRUNCATE TABLE "${entity.tableName}" RESTART IDENTITY CASCADE;`);
    }
  }
});

afterAll(async () => {
  if (process.env.NODE_ENV === "test") {
    await AppDataSource.destroy();
    await serverControl.stopServer();
  }
});

export { server };
