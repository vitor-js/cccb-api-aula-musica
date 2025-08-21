import {getAllUsers as getAllUsersHelper} from './helper.js'


async function getAllUsers() {
    try {
        const users = await getAllUsersHelper()
        return users
    }catch(e) {
        console.log(e)
        throw("Erro interno de servidor")
    } 
}

export {
    getAllUsers
}