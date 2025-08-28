import {createAluno as createAlunoServie} from '../../service/alunoService/index.js'
import {getAllAlunos as getAllAlunosService} from '../../service/alunoService/index.js'
import {getAluno as getAlunoService} from '../../service/alunoService/index.js'
import {updateAluno as updateAlunoService} from '../../service/alunoService/index.js'
import {deleteAluno as deleteAlunoService} from '../../service/alunoService/index.js'


async function createAluno(req, res) {
    try {
        const newAluno = await createAlunoServie(req.body)
        return res.status(201).json({
            data: newAluno
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    } 
}

async function getAllAlunos (req, res) {
    try {
        const allAlunos = await getAllAlunosService()
        return res.json({
            data: allAlunos
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function getAluno (req, res) {
    try {
        const aluno = await getAlunoService(Number(req.params.id))
        return res.json({
            data: aluno
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function updateAluno (req, res) {
    try {
        const aluno = await updateAlunoService(Number(req.params.id), req.body)
        return res.json({
            data: aluno
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


async function deleteAluno (req, res) {
    try {
        const response = await deleteAlunoService(Number(req.params.id));
        res.json(response);
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


export {
    createAluno,
    getAllAlunos,
    deleteAluno,
    updateAluno,
    getAluno
}