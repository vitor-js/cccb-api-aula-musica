import {createAulaByJornada as createAulaService} from '../../service/aulaService/index.js'
import {getAllAulasByJornada as getAllAulasService} from '../../service/aulaService/index.js'
import {getAulaByJornada as getAulaService} from '../../service/aulaService/index.js'
import {updateAulaByJornada as updateAulaService} from '../../service/aulaService/index.js'
import {deleteAulaByJornada as deleteAulaService} from '../../service/aulaService/index.js'

async function createAulaByJornada(req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const aula = await createAulaService(alunoId, jornadaId, req.body);
        return res.json({
            data: aula
        });
    } catch (e) {
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function getAllAulasByJornada(req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const aulas = await getAllAulasService(alunoId, jornadaId);
        return res.json({
            data: aulas
        });
    } catch (e) {
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function getAulaByJornada(req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const aulaId = Number(req.params.aulaId);
        const aula = await getAulaService(alunoId, jornadaId, aulaId);
        return res.json({
            data: aula
        })
    } catch (e) {
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function updateAulaByJornada(req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const aulaId = Number(req.params.aulaId);
        const aula = await updateAulaService(alunoId, jornadaId, aulaId, req.body);
        return res.json({
            data: aula
        })
    } catch (e) {
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function deleteAulaByJornada(req, res) {
    try {
        const alunoId = Number(req.params.id);
        const jornadaId = Number(req.params.jornadaId);
        const aulaId = Number(req.params.aulaId);
        const result = await deleteAulaService(alunoId, jornadaId, aulaId);
        return res.json({
            data: result
        })
    } catch (e) {
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

export {
    createAulaByJornada,
    getAllAulasByJornada,
    getAulaByJornada,
    updateAulaByJornada,
    deleteAulaByJornada
}