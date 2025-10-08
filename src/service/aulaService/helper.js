import { AppDataSource } from "../../database/config/data-source.js";
import { Aula } from "../../database/model/aula/index.js"
import { Jornada } from "../../database/model/jornada/index.js"
import { Aluno } from "../../database/model/aluno/index.js"


const aulaRepository = AppDataSource.getRepository(Aula);
const jornadaRepository = AppDataSource.getRepository(Jornada);
const alunoRepository = AppDataSource.getRepository(Aluno)

async function createAulaByJornada(alunoId, jornadaId, params) {
    try {
        const jornada = await jornadaRepository.findOne({
            where: { id: jornadaId, aluno: { id: alunoId } },
            relations: ["aluno", "aulas"],
        });
        if (!jornada) throw new Error("Jornada não encontrada para este aluno");

        const novaAula = aulaRepository.create({
            modulo: params.modulo,
            numero: params.numero,
            data: params.data,
            instrutor: params.instrutor,
            jornada,
        });

        return await aulaRepository.save(novaAula);
    } catch (e) {
        return e
    }
}

async function getAllAulasByJornada(alunoId, jornadaId) {
    try {
        const aulas = await aulaRepository.find({
            where: { jornada: { id: jornadaId, aluno: { id: alunoId } } },
            relations: ["jornada", "jornada.aluno"],
        });

        return aulas;
    } catch (e) {
        return e
    }
}

async function getAulaByJornada(alunoId, jornadaId, aulaId) {
    try {
        const aula = await aulaRepository.findOne({
            where: {id: aulaId, jornada: {id: jornadaId, aluno: {id: alunoId}}},
            relations: ["jornada", "jornada.aluno"]
        })
        if (!aula) throw new Error("Aula não encontrada");
        return aula;
    } catch (e) {
        return e
    }
}

async function updateAulaByJornada(alunoId, jornadaId, aulaId, params) {
    try {
        const aula = await aulaRepository.findOne({
            where: {id: aulaId, jornada: {id: jornadaId, aluno: {id: alunoId}}},
            relations: ["jornada", "jornada.aluno"]
        })
        if (!aula) throw new Error("Aula não encontrada");

        Object.assign(aula, params)
        const updatedAula = await aulaRepository.save(aula)
        return updatedAula;
    } catch (e) {
        return e
    }
}

async function deleteAulaByJornada(alunoId, jornadaId, aulaId) {
    try {
        const aula = await aulaRepository.findOne({
            where: {id: aulaId, jornada: {id: jornadaId, aluno: {id: alunoId}}},
            relations: ["jornada", "jornada.aluno"]
        })
        if (!aula) throw new Error("Aula não encontrada");
        
        await aulaRepository.remove(aula);
        return { message: "Aula deletada com sucesso" };
    } catch (e) {
        return e
    }
}

export {
    createAulaByJornada,
    getAllAulasByJornada,
    getAulaByJornada,
    updateAulaByJornada,
    deleteAulaByJornada
}