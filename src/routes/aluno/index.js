import { Router } from "express"

const router = Router();

import  {getAllUsers, updateUser, getUser, deleteUser} from '../../controller/userController/index.js'


export {
    getAllUsers
}

router.get("/aluno", getAllUsers);

router.get("/aluno/:id", getUser);

router.put("/aluno/:id", updateUser);

router.delete("/aluno/id", deleteUser);


export default router