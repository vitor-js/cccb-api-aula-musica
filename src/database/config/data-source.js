import { DataSource } from "typeorm"
import { Aluno } from '../model/aluno/index.js'
import { Jornada } from '../model/jornada/index.js'
import { Aula } from '../model/aula/index.js'


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",         // <--- nome do serviço do docker-compose
  port: 5433,         // <--- porta interna do container
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.NODE_ENV === "test"
            ? process.env.DB_NAME || "ccb_db_test"
            : process.env.DB_NAME || "ccb_db",
  entities: [Aluno, Jornada, Aula], // todas as entidades
  migrations: ["src/database/migrations/**/*.js"],
  subscribers: [],
  logging: false,
});
