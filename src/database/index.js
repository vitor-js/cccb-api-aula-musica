import { AppDataSource } from './config/data-source.js'

async function start() {
  console.log("Iniciando a conexão com o banco...");
  try {
    await AppDataSource.initialize();
    console.log("Conectado ao banco com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao banco: ", err);
    throw err;
  }
}

async function stop() {
  console.log("Encerrando conexão com o banco...");
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log("Conexão com o banco encerrada com sucesso!")
    }
  } catch (err) {
    console.error("Erro ao encerrar a conexão com o banco: ", err);
    throw err;
  }
}

export default {
  startDatabase: start,
  stopDatabase: stop
}