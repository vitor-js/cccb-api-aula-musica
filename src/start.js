import database from "./database/index.js";
import server from "./server/index.js";



const bootstrap = async () => {
  try {
    console.log('Iniciando aplicação em modo: development');

    await database.startDatabase();

    // Depois inicia o servidor
    await server.startServer(3000);
    
    console.log('Aplicação iniciada com sucesso!');
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
    
    // Em caso de erro, tenta encerrar tudo corretamente
    try {
      await database.stopDatabase()
      await server.stopServer();
    } catch (shutdownError) {
      console.error('Erro ao encerrar a aplicação:', shutdownError);
    }
    
    // Encerra o processo com erro
    process.exit(1);
  }
};

// Inicia a aplicação
bootstrap();