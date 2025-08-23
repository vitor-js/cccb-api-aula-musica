import {getAllUsers as getAllUsersHelper} from './helper.js'
import {getUser as getUserHelper} from './helper.js'
import {updateUser as updateUserHelper} from './helper.js'
import {deleteUser as deleteUseHelper} from './helper.js'


async function getAllUsers() {
    try {
        const users = await getAllUsersHelper()
        console.log(users, '---')
        return users
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function getUser(id) {
    try {
        const user = await getUserHelper(id)
        return user
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function updateUser(id, params) {
    try {
        const users = await updateUserHelper(id, params)
        return users
    }catch(e) {
        throw("Erro interno de servidor")
    } 
}

async function deleteUser(id) {
    try {
         await deleteUseHelper(id)
        return 
    }catch(e) {
        console.log(e)
        throw("Erro interno de servidor")
    } 
}

export {
    getAllUsers,
    deleteUser,
    updateUser,
    getUser
}