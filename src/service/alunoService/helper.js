
import { AppDataSource } from "../../database/config/data-source.js";
import { Aluno } from "../../database/model/aluno/index.js";

const alunoRepository = AppDataSource.getRepository(Aluno); // pega o repositório da entidade

async function createAluno(params) {
    try {
        const aluno = alunoRepository.create(params)
        await alunoRepository.save(aluno)
        console.log(aluno);
        return aluno;
        
    }catch(e){
        return e
    }
}

async function getAllAlunos() {
    try { 
        const alunos = await alunoRepository.find({
            relations: ["jornadas"], // ✅ carrega jornadas junto
        });
        console.log(alunos)
        return alunos;

    } catch(e) {
        return e
    } 
       
}


async function getAluno(id) {
    try {
        const aluno = await alunoRepository.findOne({
            where: { id: id },
            relations: ["jornadas"], // 👈 aqui faz o preload
        });
        console.log(aluno)
        return aluno
    } catch(e) {
        return e
    } 
       
}


async function updateAluno(id, params) {
    try {
         // faz o update direto no banco
        const result = await alunoRepository.update(id, params);

        if (result.affected === 0) {
            throw new Error("Usuário não encontrado");
        }

        // retorna o aluno atualizado (carregando do banco novamente)
        return await alunoRepository.findOneBy({ id });
      
    } catch(e) {
        return e
    } 
       
}



async function deleteAluno(id) {
    try {
        const result = await alunoRepository.delete(id);

        if (result.affected === 0) {
            throw new Error("Usuário não encontrado");
        }

        return { message: "Usuário deletado com sucesso" };
    } catch(e) {
        return e
    }
}




export {
    createAluno,
    getAllAlunos,
    getAluno,
    deleteAluno,
    updateAluno
}