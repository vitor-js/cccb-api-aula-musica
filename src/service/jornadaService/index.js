import {createJornadaByAluno as createJornadaHelper} from './helper.js'
import {getAllJornadasByAluno as getAllJornadasHelper} from './helper.js'
import {getJornadaByAluno as getJornadaHelper} from './helper.js'
import {updateJornadaByAluno as updateJornadaHelper} from './helper.js'
import {deleteJornadaByAluno as deleteJornadaHelper} from './helper.js'


async function createJornadaByAluno(alunoId, params) {
    try {
        const jornada = await createJornadaHelper(alunoId, params)
        console.log(jornada);
        return jornada;
    }catch(e){
        throw("Erro interno de servidor")
    }
}

async function getAllJornadasByAluno(alunoId) {
    try {
        const jornadas = await getAllJornadasHelper(alunoId)
        console.log(jornadas)
        return jornadas
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function getJornadaByAluno(alunoId, jornadaId) {
    try {
        const jornada = await getJornadaHelper(alunoId, jornadaId)
        console.log(jornada)
        return jornada
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function updateJornadaByAluno(alunoId, jornadaId, params) {
    try {
        const jornada = await updateJornadaHelper(alunoId, jornadaId, params)
        console.log(jornada)
        return jornada
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function deleteJornadaByAluno(alunoId, jornadaId) {
    try {
        const result = await deleteJornadaHelper(alunoId, jornadaId)
        return result
    }catch(e) {
        console.log(e)
        throw("Erro interno de servidor")
    } 
}

export {
    createJornadaByAluno,
    getAllJornadasByAluno,
    getJornadaByAluno,
    updateJornadaByAluno,
    deleteJornadaByAluno
}