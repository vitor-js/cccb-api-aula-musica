import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "meubanco",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

