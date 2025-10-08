import { AppDataSource } from "../../database/config/data-source.js";
import { Jornada } from "../../database/model/jornada/index.js";
import { Aluno } from "../../database/model/aluno/index.js"

const jornadaRepository = AppDataSource.getRepository(Jornada); // pega o repositório da entidade
const alunoRepository = AppDataSource.getRepository(Aluno)

async function createJornadaByAluno(alunoId, params) {
    try {
        const aluno = await alunoRepository.findOneBy({ id: alunoId });
        if (!aluno) throw new Error("Aluno não encontrado");

        const novaJornada = jornadaRepository.create({
            data_inicio: params.data_inicio,
            instrumento: params.instrumento,
            status: params.status,
            aluno,
        });

        return await jornadaRepository.save(novaJornada);
        
    }catch(e){
        return e
    }
}

async function getAllJornadasByAluno(alunoId) {
    try {
        const jornadas = await jornadaRepository.find({
            where: { aluno: { id: alunoId } }, // filtra pelo aluno_id
            relations: ["aluno", "aulas"],     // carrega também aluno e aulas
        });
        console.log(jornadas)
        return jornadas;

    } catch(e) {
        return e
    } 
       
}


async function getJornadaByAluno(alunoId, jornadaId) {
    try {
        const jornada = await jornadaRepository.findOne({
            where: { id: jornadaId, aluno: { id: alunoId } }, // garante que pertence ao aluno
            relations: ["aluno", "aulas"],
        });

        if (!jornada) throw new Error("Jornada não encontrada para este aluno");

        return jornada;
    } catch (e) {
        return e
    }
    
}


async function updateJornadaByAluno(alunoId, jornadaId, params) {
    try {
        const jornada = await jornadaRepository.findOne({
            where: { id: jornadaId, aluno: { id: alunoId } },
            relations: ["aluno", "aulas"],
        });

        if (!jornada) throw new Error("Jornada não encontrada para este aluno");

        Object.assign(jornada, params);

        return await jornadaRepository.save(jornada);
    } catch(e) {
        return e
    } 
       
}



async function deleteJornadaByAluno(alunoId, jornadaId) {
    try {
        const jornada = await jornadaRepository.findOne({
            where: { id: jornadaId, aluno: { id: alunoId } },
        });

        if (!jornada) throw new Error("Jornada não encontrada para este aluno");

        await jornadaRepository.remove(jornada);

        return { message: "Jornada deletada com sucesso" };
    } catch(e) {
        return e
    }
}




export {
    createJornadaByAluno,
    getAllJornadasByAluno,
    getJornadaByAluno,
    updateJornadaByAluno,
    deleteJornadaByAluno
}