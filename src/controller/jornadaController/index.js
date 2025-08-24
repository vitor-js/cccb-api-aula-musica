import {createJornadaByAluno as createJornadaServie} from '../../service/jornadaService/index.js'
import {getAllJornadasByAluno as getAllJornadasService} from '../../service/jornadaService/index.js'
import {getJornadaByAluno as getJornadaService} from '../../service/jornadaService/index.js'
import {updateJornadaByAluno as updateJornadaService} from '../../service/jornadaService/index.js'
import {deleteJornadaByAluno as deleteJornadaService} from '../../service/jornadaService/index.js'


async function createJornadaByAluno(req, res) {
    try {
        const alunoId = Number(req.params.id)
        const jornada = await createJornadaServie(alunoId, req.body)
        return res.json({
            data: jornada
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    } 
}

async function getAllJornadasByAluno (req, res) {
    try {
        const alunoId = Number(req.params.id)
        const allJornadas = await getAllJornadasService(alunoId)
        return res.json({
            data: allJornadas
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function getJornadaByAluno (req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);

        const jornada = await getJornadaService(alunoId, jornadaId);
        return res.json({
            data: jornada
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function updateJornadaByAluno (req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const jornada = await updateJornadaService(alunoId, jornadaId, req.body)
        return res.json({
            data: jornada
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


async function deleteJornadaByAluno (req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const response = await deleteJornadaService(alunoId, jornadaId);
        res.json(response);
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


export {
    createJornadaByAluno,
    getAllJornadasByAluno,
    getJornadaByAluno,
    updateJornadaByAluno,
    deleteJornadaByAluno
}