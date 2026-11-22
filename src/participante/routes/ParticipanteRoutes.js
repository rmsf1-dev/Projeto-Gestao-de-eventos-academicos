const express = require('express')
const router = express.Router() //agrupador de rotas

const ParticipanteController = require('../controllers/ParticipanteController')

router.post('/', (req, res) => {
    ParticipanteController.criar(req, res)
})

router.get('/', (req, res) => {
    ParticipanteController.listar(req, res)
})

router.patch('/:id', (req, res) => {
    ParticipanteController.atualizar(req, res)
})

router.delete('/:id', (req, res) => {
    ParticipanteController.deletar(req, res)
})

router.put('/:id', (req, res) => {
    ParticipanteController.substituir(req, res)
})


module.exports = router;