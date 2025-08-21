import { DataSource } from "typeorm"

import {Aluno} from '../model/user/index.js'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "meubanco",
    synchronize: true,
    logging: false,
    entities: [
        Aluno
    ],
    migrations: [],
    subscribers: [],
})

