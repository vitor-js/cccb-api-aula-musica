import request from "supertest";
import { server } from "./jest.setup.js";

describe("Integração Aluno/Jornada/Aula", () => {
  it("cria aluno → jornada → aula", async () => {
    const aluno = await request(server)
      .post("/aluno")
      .send({ nome: "Igor", idade: 15 });
    const id = aluno.body.data.id;

    const jornada = await request(server)
      .post(`/aluno/${id}/jornada`)
      .send({ data_inicio: "2025-09-01", instrumento: "Violão", status: "Ativa" });
    const jornadaId = jornada.body.data.id;

    const aula = await request(server)
      .post(`/aluno/${id}/jornada/${jornadaId}/aula`)
      .send({ modulo: "Escalas", numero: 1, data: "2025-09-10", instrutor: "Carlos" })
      .expect(201);

    expect(aula.body.data).toHaveProperty("id");
  });
});
