const express = require('express');
const sequelize = require('./config/database')


require('./atividade/modelo/Atividade')
require('./palestrante/modelo/palestrante')
require('./participante/modelo/Participante')

const app = express();//criação de uma aplicação express

app.use(express.json());

const participanteRoutes = require('./participante/routes/ParticipanteRoutes');
const palestranteRoutes = require('./palestrante/routes/palestranteRoutes')
const atividadeRoutes = require('./atividade/routes/Atividaderotas')


app.use('/participantes', participanteRoutes)  // /participantes vai combinar com os caminhos do arquivo das rotas
app.use('/palestrantes', palestranteRoutes)
app.use('/atividades', atividadeRoutes)

app.get('/', (req, res) => {
    res.send('servidor de gestão de eventos funcionando')
})

sequelize.sync()
    .then(() => {
        console.log('Banco conectado e tabelas sincronizadas')


        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000')
        })
    })
    .catch((error) => {
        console.log('Erro ao conectar com o banco', error.message)
    })