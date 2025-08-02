// Importa o construtor WebSocketServer da biblioteca 'ws'
const { WebSocketServer } = require('ws');

// Importa a biblioteca 'dotenv' para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Cria uma instância do servidor WebSocket, utilizando a porta definida no .env ou a 8080 como padrão
const wss = new WebSocketServer({ port: process.env.PORT || 8080 }); 

// Define o que acontece quando um cliente se conecta ao servidor WebSocket
wss.on('connection', (ws) => {

    // Define o que fazer caso ocorra um erro na conexão do cliente
    ws.on('error', console.error);

    // Define o que fazer quando uma mensagem for recebida de um cliente
    ws.on('message', (data) => {

        // Envia a mensagem recebida para todos os clientes conectados
        wss.clients.forEach((client) => client.send(data).toString());
    });

    // Exibe uma mensagem no terminal indicando que um cliente se conectou
    console.log("Client connected");
});
