import { EntitySchema } from "typeorm";
import { Jornada } from "../jornada/index.js";

export const Aula = new EntitySchema({
  name: "aula",
  columns: {
    id: { type: Number, primary: true, generated: true },
    modulo: { type: String, nullable: false },
    numero: { type: String, nullable: false },
    data: { type: "date", nullable: false },
    instrutor: { type: String, nullable: false },
    created_at: { type: "timestamp", createDate: true },
    updated_at: { type: "timestamp", updateDate: true },
  },
  relations: {
    jornada: {
      type: "many-to-one",
      target: "jornada", 
      joinColumn: { name: "jornada_id" },
      onDelete: "CASCADE",
    },
  },
});
