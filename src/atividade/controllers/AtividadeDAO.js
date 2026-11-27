const Atividade = require('../modelo/Atividade.js')
const Palestra = require('../modelo/Palestra.js')
const Minicurso = require('../modelo/Minicurso.js')



class AtividadeDAO {
    async criar(req, res) {
        try {
            const { nome,sala, data, carga_hr, vagas, atividade, horario, inscricoes } = req.body


             if (nome===undefined||sala === undefined || data === undefined || carga_hr === undefined || vagas === undefined || atividade === undefined || horario === undefined || inscricoes === undefined) { // ! rejeita 0, mesmo que ele seja válido, por isso coloca undefined
                            return res.status(400).json({
                                erro: 'Todos os campos são obrigatórios!!'
                            })
            }

            let ClasseAtividade;

            if(atividade === 'Palestra'){
                ClasseAtividade = Palestra
            } else if(atividade === 'Minicurso'){
                ClasseAtividade = Minicurso
            } else{
                return res.status(400).json({
                    erro: 'Ativiade inválida'
                })
            }

           
            
            const novaAtividade = new ClasseAtividade(nome, sala, data, carga_hr, vagas, horario)

           
            
            const evento = await Atividade.create({
                nome: novaAtividade.nome,
                sala: novaAtividade.sala, 
                data : novaAtividade.data, 
                carga_hr: novaAtividade.carga_hr, 
                vagas: novaAtividade.vagas, 
                horario: novaAtividade.horario,
                atividade,
                inscricoes
            })


            return res.status(201).json(evento)
        } catch (error) {
            return res.status(500).json({
                erro: 'erro ao cadastrar uma atividade', mensagem: error.message
            })
        }
    }
    async listar(req, res) {
        try {
            const info = await Atividade.findAll()
            return res.status(200).json(info)
        } catch (error) {
            return res.status(500).json({ erro: 'erro ao listar Atividades', mensagem: error.message })
        }
    }
    async atualizar(req, res) {
        try {
            const atividadeA = await Atividade.findByPk(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não cadastrada'
                })
            }
            const {nome, sala, data, carga_hr, vagas, horario, inscricoes } = req.body
            await atividadeA.update({
                nome,sala, data, carga_hr, vagas, horario, inscricoes
            })
            return res.status(200).json(atividadeA)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async deletar(req, res) {
        try {
            const atividadeA = await Atividade.findByPk(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não encontrada'
                })
            }

            await atividadeA.destroy()
            
            return res.status(200).json({
                mensagem: 'Atividade excluida com sucesso!'
            })

        } catch (error) {
                return res.status(400).json({
                erro: 'Erro ao excluir atividade',
                mensagem: eror.message
            })
        }
    }
    async substituir(req, res) {
        try {
            const atividadeA = await Atividade.findByPk(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não encontrada'
                })
            }

            const {nome,sala, data, carga_hr, vagas, atividade, horario, inscricoes} = req.body

            if (nome===undefined||sala === undefined || data === undefined || carga_hr === undefined || vagas === undefined || horario === undefined || inscricoes === undefined) {
                return res.status(400).json({
                    erro: 'Todos os campos são obrigatórios!!'
                })
            }
            await atividadeA.update({
                nome,sala, data, carga_hr, vagas, horario, inscricoes
            })
            return res.status(200).json(atividadeA)
        }catch (error) {
            return res.status(400).json(error.message)
        }
        }
    
    }


module.exports = new AtividadeDAO()







