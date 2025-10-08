import {  Table, TableForeignKey } from "typeorm";

export class CreateAulaTable1682323123458 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "aula",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "modulo", type: "varchar", isNullable: false },
           { name: "numero", type: "varchar", isNullable: false },
          { name: "data", type: "date", isNullable: false },
          { name: "instrutor", type: "varchar", isNullable: false },
          { name: "jornada_id", type: "int", isNullable: false }, // FK para jornada
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "aula",
      new TableForeignKey({
        columnNames: ["jornada_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "jornada",
        onDelete: "CASCADE",
      })
    );
  }

  async down(queryRunner) {
    const table = await queryRunner.getTable("aula");
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("jornada_id") !== -1);
    await queryRunner.dropForeignKey("aula", foreignKey);
    await queryRunner.dropTable("aula");
  }
}
