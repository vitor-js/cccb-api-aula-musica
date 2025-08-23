import {  Table, TableForeignKey } from "typeorm";

export class CreateJornadaTable1682323123457 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "jornada",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "data_inicio", type: "date", isNullable: false },
          { name: "instrumento", type: "varchar", isNullable: false },
          { name: "status", type: "varchar", isNullable: false },
          { name: "aluno_id", type: "int", isNullable: false }, // FK para aluno
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "jornada",
      new TableForeignKey({
        columnNames: ["aluno_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "aluno",
        onDelete: "CASCADE",
      })
    );
  }

  async down(queryRunner) {
    const table = await queryRunner.getTable("jornada");
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("aluno_id") !== -1);
    await queryRunner.dropForeignKey("jornada", foreignKey);
    await queryRunner.dropTable("jornada");
  }
}
