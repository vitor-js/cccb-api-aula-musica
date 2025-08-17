import express from "express";
import cors from 'cors';
import alunoRoutes from '../routes/aluno/index.js'

let app
let server

async function start(port) {
  try {
    console.log("Iniciando o servidor")
    app = express()

    app.use(cors());
    app.use(express.json());
    app.use(alunoRoutes)
    server = app.listen(port, () => {
      console.log(`Servidor Express escutando em http://localhost:${port}`);
    });

  }catch {
    console.error("Falha ao iniciar o servidor:", error);
    throw error; // Propaga o erro para o chamador
  }
}

async function stop() {
  if (!server) {
    console.warn("Servidor não está iniciado.");
    return;
  }

  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        console.error("Erro ao encerrar o servidor:", err);
        reject(err);
      } else {
        console.log("Servidor Express encerrado com sucesso.");
        resolve();
      }
    })
  })
}


export default {
  startServer: start,
  stopServer: stop
};