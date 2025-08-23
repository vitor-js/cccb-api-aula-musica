
import { AppDataSource } from "../../database/config/data-source.js";
import { Aluno } from "../../database/model/aluno/index.js";


async function getAllUsers() {
    try {
    const alunoRepository = AppDataSource.getRepository(Aluno); // pega o repositório da entidade
    const users = await alunoRepository.find({
  relations: ["jornadas"], // ✅ carrega jornadas junto
});
    console.log(users, '-------')
    return users;

    } catch(e) {
        return e
    } 
       
}


async function getUser(id) {
    try {
      
    } catch(e) {
        return e
    } 
       
}


async function updateUser(id, params) {
    try {
      
    } catch(e) {
        return e
    } 
       
}



async function deleteUser(id) {
    try {
      
    } catch(e) {
        return e
    } 
       
}




export {
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
}