import request from "supertest";
import { server } from "./jest.setup.js";

describe("Integração Aluno → Jornada → Aula", () => {
  let alunoId;
  let jornadaId;
  let aulaId;

  it("create, update e delete aluno → jornada → aula", async () => {
    // create aluno
    const alunoRes = await request(server)
      .post("/aluno")
      .send({ nome: "Igor", idade: 15 })
      .expect(201);
    alunoId = alunoRes.body.data.id;
    expect(alunoId).toBeDefined();

    // getAll aluno
    const alunoList = await request(server)
      .get("/aluno")
      .expect(200)
    expect(Array.isArray(alunoList.body.data)).toBe(true);
    expect(alunoList.body.data.length).toBe(1);

    // update aluno
    const alunoUpdateRes = await request(server)
      .put(`/aluno/${alunoId}`)
      .send({ idade: 16 })
      .expect(200);
    expect(alunoUpdateRes.body.data.idade).toBe(16);

    // create jornada
    const jornadaRes = await request(server)
      .post(`/aluno/${alunoId}/jornada`)
      .send({ data_inicio: "2025-09-01", instrumento: "Violão", status: "Ativo" })
      .expect(201);
    jornadaId = jornadaRes.body.data.id;
    expect(jornadaId).toBeDefined();

    // update jornada
    const jornadaUpdateRes = await request(server)
      .put(`/aluno/${alunoId}/jornada/${jornadaId}`)
      .send({ status: "Inativo" })
      .expect(200);
    expect(jornadaUpdateRes.body.data.status).toBe("Inativo");

    // create aula
    const aulaRes = await request(server)
      .post(`/aluno/${alunoId}/jornada/${jornadaId}/aula/`)
      .send({ modulo: "1 (elementos da música)", numero: "1", data: "2025-09-10", instrutor: "Carlos" })
      .expect(201);
    aulaId = aulaRes.body.data.id;
    expect(aulaId).toBeDefined();

    // update aula
    const aulaUpdateRes = await request(server)
      .put(`/aluno/${alunoId}/jornada/${jornadaId}/aula/${aulaId}`)
      .send({ instrutor: "João" })
      .expect(200);
    expect(aulaUpdateRes.body.data.instrutor).toBe("João");

    // getAll aulas
    const aulasList = await request(server)
      .get(`/aluno/${alunoId}/jornada/${jornadaId}/aula/`)
      .expect(200);
    expect(Array.isArray(aulasList.body.data)).toBe(true);
    expect(aulasList.body.data.length).toBe(1);

    // delete aula, jornada e aluno
    await request(server)
      .delete(`/aluno/${alunoId}/jornada/${jornadaId}/aula/${aulaId}`)
      .expect(200);

    await request(server)
      .delete(`/aluno/${alunoId}/jornada/${jornadaId}`)
      .expect(200);

    await request(server)
      .delete(`/aluno/${alunoId}`)
      .expect(200);
  });
});
