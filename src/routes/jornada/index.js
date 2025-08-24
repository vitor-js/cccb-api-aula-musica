import { Router } from "express"

const router = Router();

import  {createJornadaByAluno, getAllJornadasByAluno, updateJornadaByAluno, getJornadaByAluno, deleteJornadaByAluno} from '../../controller/jornadaController/index.js'


export {
    getAllJornadasByAluno
}

router.post("/aluno/:id/jornada", createJornadaByAluno);

router.get("/aluno/:id/jornada", getAllJornadasByAluno);

router.get("/aluno/:id/jornada/:jornadaId", getJornadaByAluno);

router.put("/aluno/:id/jornada/:jornadaId", updateJornadaByAluno);

router.delete("/aluno/:id/jornada/:jornadaId", deleteJornadaByAluno);


export default router