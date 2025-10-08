import {createAluno as createAlunoHelper} from './helper.js'
import {getAllAlunos as getAllAlunosHelper} from './helper.js'
import {getAluno as getAlunoHelper} from './helper.js'
import {updateAluno as updateAlunoHelper} from './helper.js'
import {deleteAluno as deleteAlunoHelper} from './helper.js'


async function createAluno(params) {
    try {
        const aluno = await createAlunoHelper(params)
        console.log(aluno);
        return aluno;
    }catch(e){
        throw("Erro interno de servidor")
    }
}

async function getAllAlunos() {
    try {
        const alunos = await getAllAlunosHelper()
        console.log(alunos)
        return alunos
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function getAluno(id) {
    try {
        const aluno = await getAlunoHelper(id)
        console.log(aluno)
        return aluno
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function updateAluno(id, params) {
    try {
        const aluno = await updateAlunoHelper(id, params)
        console.log(aluno)
        return aluno
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function deleteAluno(id) {
    try {
        const result = await deleteAlunoHelper(id)
        return result
    }catch(e) {
        console.log(e)
        throw("Erro interno de servidor")
    } 
}

export {
    createAluno,
    getAllAlunos,
    deleteAluno,
    updateAluno,
    getAluno
}