import { Router } from 'express';

import {createAulaByJornada, getAllAulasByJornada, getAulaByJornada, updateAulaByJornada, deleteAulaByJornada} from '../../controller/aulaController/index.js'

const router = Router();

router.post("/aluno/:id/jornada/:jornadaId/aula/", createAulaByJornada)
router.get("/aluno/:id/jornada/:jornadaId/aula/", getAllAulasByJornada)
router.get("/aluno/:id/jornada/:jornadaId/aula/:aulaId", getAulaByJornada)
router.put("/aluno/:id/jornada/:jornadaId/aula/:aulaId", updateAulaByJornada)
router.delete("/aluno/:id/jornada/:jornadaId/aula/:aulaId", deleteAulaByJornada)

export default router;