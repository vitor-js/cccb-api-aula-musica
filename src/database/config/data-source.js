import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "escola_musical_ccb",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

