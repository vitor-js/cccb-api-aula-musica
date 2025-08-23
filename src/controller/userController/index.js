import {getAllUsers as getAllUsersService} from '../../service/userService/index.js'
import {getUser as getUserService} from '../../service/userService/index.js'
import {updateUser as updateUserService} from '../../service/userService/index.js'
import {deleteUser as deleteUserService} from '../../service/userService/index.js'




async function getAllUsers (req, res) {
    try {
        const allUsers = await getAllUsersService()
        return res.json({
            data: allUsers
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function getUser (req, res) {
     const id = req.query.id
    try {
        const user = await getUserService(id)
        return res.json({
            data: user
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}

async function updateUser (req, res) {
    const id = req.query.id
    const params = req.body
    try {
        const user = await updateUserService(id, params)
        return res.json({
            data: user
        })
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


async function deleteUser (req, res) {
    try {
           const id = req.query.id
         await deleteUserService(id)
     res.json({ message: "Sucesso!" });
    }catch(e){
        res.status(500).json({
            status: "error",
            msg: e
        })
    }
}


export {
    getAllUsers,
    deleteUser,
    updateUser,
    getUser
}