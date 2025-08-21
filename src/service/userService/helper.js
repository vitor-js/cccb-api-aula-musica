import {Aluno} from "../../database/model/user/index.js"

async function getAllUsers() {
    try {
         const user = await Aluno.find(id)
         console.log(user, 'label: chamada para o user')
        return user
    } catch(e) {
        return e
    } 
       
}


export {
    getAllUsers
}