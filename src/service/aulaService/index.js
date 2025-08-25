import {createAulaByJornada as createAulaHelper} from './helper.js'
import {getAllAulasByJornada as getAllAulasHelper} from './helper.js'
import {getAulaByJornada as getAulaHelper} from './helper.js'
import {updateAulaByJornada as updateAulaHelper} from './helper.js'
import {deleteAulaByJornada as deleteAulaHelper} from './helper.js'

async function createAulaByJornada(alunoId, jornadaId, params) {
    try {
        const novaAula = await createAulaHelper(alunoId, jornadaId, params)
        console.log(novaAula);
        return novaAula;
        
    } catch (e) {
        throw ("Erro interno de servidor")
    }
}

async function getAllAulasByJornada(alunoId, jornadaId) {
    try {
        const aulas = await getAllAulasHelper(alunoId, jornadaId);
        console.log(aulas);
        return aulas;
    } catch (e) {
        throw ("Erro interno de servidor")
    }
}

async function getAulaByJornada(alunoId, jornadaId, aulaId) {
    try {
        const aula = await getAulaHelper(alunoId, jornadaId, aulaId);
        console.log(aula);
        return aula;
    } catch (e) {
        throw ("Erro interno de servidor")
    }
}

async function updateAulaByJornada(alunoId, jornadaId, aulaId, params) {
    try {
        const aula = await updateAulaHelper(alunoId, jornadaId, aulaId, params);
        console.log(aula);
        return aula;
    } catch (e) {
        throw ("Erro interno de servidor")
    }
}

async function deleteAulaByJornada(alunoId, jornadaId, aulaId) {
    try {
        const result = await deleteAulaHelper(alunoId, jornadaId, aulaId);
        return result;
    } catch (e) {
        throw ("Erro interno de servidor")
    }
}

export {
    createAulaByJornada,
    getAllAulasByJornada,
    getAulaByJornada,
    updateAulaByJornada,
    deleteAulaByJornada
}