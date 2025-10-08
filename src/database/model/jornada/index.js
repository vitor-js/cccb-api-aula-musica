import { EntitySchema } from "typeorm";
import { Aluno } from "../aluno/index.js";
import { Aula } from "../aula/index.js";

export const Jornada = new EntitySchema({
  name: "jornada",
  columns: {
    id: { type: Number, primary: true, generated: true },
    data_inicio: { type: "date", nullable: false },
    instrumento: { type: String, nullable: false },
    status: { type: String, nullable: false },
    created_at: { type: "timestamp", createDate: true },
    updated_at: { type: "timestamp", updateDate: true },
  },
  relations: {
  aluno: {
    type: "many-to-one",
    target: "aluno",     // também pelo nome
    joinColumn: { name: "aluno_id" },
    onDelete: "CASCADE",
  },
  aulas: {
    type: "one-to-many",
    target: "aula",
    inverseSide: "jornada",
    cascade: true,
  },
},
});
