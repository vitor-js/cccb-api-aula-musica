import { EntitySchema } from "typeorm";

export const Aluno = new EntitySchema({
  name: "Aluno",
  tableName: "aluno",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: true, // equivale ao SERIAL
    },
    nome: {
      type: "varchar",
      length: 100,
      nullable: false,
    },
    instrumento: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    email: {
      type: "varchar",
      length: 100,
      unique: true,
      nullable: false,
    },
    telefone: {
      type: "varchar",
      length: 20,
      nullable: true,
    },
  },
});
