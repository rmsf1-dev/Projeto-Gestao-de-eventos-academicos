const express = require('express')
const router = express.Router()

const InscricaoController = require('../controllers/InscricaoController')

router.post('/', (req, res) => {
    InscricaoController.criar(req, res)
})

router.get('/', (req, res) =>{
    InscricaoController.listar(req, res)
})

router.delete('/:participanteId/:atividadeId', (req, res) => {
    InscricaoController.deletar(req, res)
})

router.patch('/:participanteId/:atividadeId/presenca', (req, res) => {
    InscricaoController.registrarPresenca(req,res)
})



module.exports = router