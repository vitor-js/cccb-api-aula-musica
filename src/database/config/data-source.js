import { DataSource } from "typeorm"

import {Aluno} from '../model/user/index.js'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "meubanco",
    synchronize: true,
    logging: false,
    entities: [
        Aluno
    ],
    migrations: [],
    subscribers: [],
})

