import { Router } from "express"

const router = Router();

import  {createAluno, getAllAlunos, updateAluno, getAluno, deleteAluno} from '../../controller/alunoController/index.js'


export {
    getAllAlunos
}

router.post("/aluno", createAluno);

router.get("/aluno", getAllAlunos);

router.get("/aluno/:id", getAluno);

router.put("/aluno/:id", updateAluno);

router.delete("/aluno/:id", deleteAluno);


export default router