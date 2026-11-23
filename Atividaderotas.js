const express = require('express')


const router = express.Router()

const AtividadeDAO = require('AtividadeDAO.js')


router.post('/', (req, res) => {
    AtividadeDAO.criar(req, res)
})

router.get('/', (req, res) => {
    AtividadeDAO.listar(req, res)
})

router.patch('/:id', (req, res) => {
    AtividadeDAO.atualizar(req, res)
})

router.delete('/:id', (req, res) => {
    AtividadeDAO.deletar(req, res)
})

router.put('/:id', (req, res) => {
    AtividadeDAO.substituir(req, res)
})


module.exports = router;