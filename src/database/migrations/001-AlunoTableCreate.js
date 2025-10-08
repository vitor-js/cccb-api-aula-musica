import {  Table } from "typeorm";

export class CreateAlunoTable1682323123456 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "aluno",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "nome", type: "varchar", isNullable: false },
          { name: "idade", type: "int", isNullable: false },
          { name: "comum", type: "varchar", isNullable: true },
          { name: "endereco", type: "varchar", isNullable: true },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("aluno");
  }
}
