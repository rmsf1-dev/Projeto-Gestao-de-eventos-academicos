const express = require('express');
const app = express();//criação de uma aplicação express

app.use(express.json());

const participanteRoutes = require('./participante/routes/ParticipanteRoutes');

app.use('/participantes', participanteRoutes)  // /participantes vai combinar com os caminhos do arquivo das rotas

app.get('/', (req, res) => {
    res.send('servidor de gestão de eventos funcionando')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})