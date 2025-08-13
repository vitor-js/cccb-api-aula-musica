import { Router } from "express"

const router = Router();


router.get("/aluno", (req, res) => {
  return res.json({hello: "world"})
});


export default router