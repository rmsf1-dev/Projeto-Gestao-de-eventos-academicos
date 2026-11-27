const {Atividade, Participante, Inscricao} = require('../../associacoes')

class InscricaoController {

    async criar(req, res){
        try {

            const {participanteId, atividadeId} = req.body

            if(!participanteId || !atividadeId){
                return res.status(400).json({ erro: "Informe o participante e a atividade" });
            } 
           
            const participante = await Participante.findByPk(participanteId)

            if(!participante){
                return res.status(404).json({
                    erro: 'Participante não encontrado'
                })
            }

            const atividade = await Atividade.findByPk(atividadeId)

            if(!atividade){
                return res.status(404).json({
                    erro: 'Atividade não encontrada'
                })
            }


            const inscricaoExistente = await Inscricao.findOne({
                where: {
                    ParticipanteId: participanteId,
                    AtividadeId: atividadeId
                }
            })

            if(inscricaoExistente){
                return res.status(409).json({
                    erro:'Participante já inscrito nessa atividade'
                })
            }


            const inscricoesParticipante = await Inscricao.findAll({
                where: {
                    ParticipanteId: participanteId
                },
                include: [{
                    model: Atividade
                }]
            })


            if(atividade.atividade === 'Minicurso'){

                const qtdInscricoes = await Inscricao.count({
                    where: {
                        AtividadeId: atividadeId
                    }
                })

                if(qtdInscricoes >= atividade.vagas){
                    return res.status(409).json({
                        erro: 'Não hpa mais vagas nesse minicurso'
                    })

                }


            }

            


            const conflito = inscricoesParticipante.some(inscricao => {
                return inscricao.Atividade.data === atividade.data &&
                inscricao.Atividade.horario === atividade.horario
            })

            if(conflito){
                return res.status(409).json({
                    erro:'Participante já tem uma atividade nesse horário'
                })
            }
            
            const novaInscricao = await Inscricao.create({
                ParticipanteId: participanteId,
                AtividadeId: atividadeId
             
            })
            return res.status(201).json({
                mensagem: 'Inscrição realiza com sucesso',
                inscricao: novaInscricao
            
            })



        }
        catch (error){
            return res.status(500).json({
                erro:'Erro ao realizar inscrição',
                mensagem: error.message
            })
        }
    }


    async listar(req, res) {
        try{

            const inscricoes = await Inscricao.findAll({
                include: [
                    {
                        model: Atividade
                    },
                    {
                        model: Participante
                    }
                ]
            })

            return res.status(200).json(inscricoes)
        }
        catch(error){
            return res.status(500).json({
                erro: 'Erro ao listar inscrições',
                mensagem: error.message
            })
        }
    }

    async deletar(req, res){
        try{
            const {participanteId, atividadeId} = req.params

            const inscricao = await Inscricao.findOne({
                where: {
                    ParticipanteId: participanteId,
                    AtividadeId: atividadeId
                }
            })

            if(!inscricao){
                return res.status(404).json({
                    erro: 'Inscrição não encontrada'
                })
            }

            await inscricao.destroy()

             return res.status(200).json({
            mensagem: 'Inscrição cancelada com sucesso!'
        })

        }
        catch(error){
            return res.status(500).json({
            erro: 'Erro ao cancelar inscrição',
            mensagem: error.message
            })
        }
    }

    async registrarPresenca(req, res) {
        try{
            const {participanteId, atividadeId} = req.params

            const inscricao = await Inscricao.findOne({
                where: {
                    ParticipanteId: participanteId,
                    AtividadeId: atividadeId
                }
            })


            if(!inscricao) {
                return res.status(404).json({
                    erro: 'Inscrição não encontrada'
                })
            }

            await inscricao.update({
                presente: true
            })

            res.status(200).json({
                mensagem: 'Presença registrada com sucesso',
                inscricao
            })

        }
        catch(error){
            return res.status(500).json({
                erro: 'Erro ao registrar presença',
                mensagem: error.message
            })
        }
    }


}

module.exports = new InscricaoController()