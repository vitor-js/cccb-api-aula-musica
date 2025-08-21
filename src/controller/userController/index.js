import {getAllUsers as getAllUsersService} from '../../service/userService/index.js'



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


export {
    getAllUsers
}