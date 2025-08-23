import { EntitySchema } from "typeorm";
import { Jornada } from "../jornada/index.js";

export const Aluno = new EntitySchema({
  name: "aluno",
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String, nullable: false },
    idade: { type: Number, nullable: false },
    comum: { type: String, nullable: true },
    endereco: { type: String, nullable: true },
    created_at: { type: "timestamp", createDate: true },
    updated_at: { type: "timestamp", updateDate: true },
  },
 relations: {
  jornadas: {   // plural
    type: "one-to-many",
      target: "jornada", 
    inverseSide: "aluno",
    cascade: true,
  },
},
});
