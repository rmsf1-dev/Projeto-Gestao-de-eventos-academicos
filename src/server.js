const express = require('express')
const app = express() //criação de uma aplicação express

app.get('/', (req, res) => {
    res.send('servidor de gestão de eventos funcionando')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})