import { Router } from "express"

const router = Router();

import  {getAllUsers} from '../../controller/userController/index.js'


export {
    getAllUsers
}

router.get("/aluno", getAllUsers);


export default router