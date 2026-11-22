const Participante = require('../modelo/Participante')

class ParticipanteController {
    async criar(req, res) {
        try {

            const {nome, email, telefone, cpf, turma, turno } = req.body

            if(!nome || !email || !telefone || !cpf || !turma || !turno){
                return res.status(400).json({
                    erro:'Todos os campos são obrigatórios!!'
                })
            }


            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if(!emailValido.test(email)) {
                return res.status(400).json({
                    erro: 'Formato de e-mail inválido'
                })
            }
            // await: espearr o banco concluir a operação
            const participante = await Participante.create({
                nome,
                email,
                telefone,
                cpf,
                turma,
                turno
            })

            return res.status(201).json(participante);
        }
        catch(error){
            if(error.name === 'SequelizeUniqueConstraintError'){ // identifica quando tenta colocar um valor que deveria ser único, mas já existe
                return res.status(409).json({ //409:conflito de dados já existentes
                    erro: 'CPF ou email já cadastrado'
                })
            }
            return res.status(500).json({ //500: erros inesperados do servidor
                erro: 'Erro ao cadastrar um participante', 
                detalhes: error.message
            })
        }
    }

    async listar(req, res) {
        try{
            const participantes = await Participante.findAll()

            return res.status(200).json(participantes)
        }
        catch(error){
            return res.status(500).json({
                erro: 'Erro ao listar participantes',
                detalhes: error.message
            })
        }
    }

    async atualizar(req, res){
        try{
            const participante = await Participante.findByPk(req.params.id)

            if(!participante){
                return res.status(404).json({
                erro: 'Participante não cadastrado'
                });
            }

            const {nome, email, telefone, cpf, turma, turno} = req.body


            if(email) {
                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


                if(!emailValido.test(email)){
                    return res.status(400).json({
                        erro: 'Formato de email inválido'
                    })
                }
            }
            await participante.update({
                nome,
                email, 
                telefone,
                cpf,
                turma,
                turno
            })

            return res.status(200).json(participante)
        }
        catch(error){

            if(error.name === 'SequelizeUniqueConstraintError'){ //se alguém tentar cadastrar um cpf ou emial que pertence a outro participante

                return res.status(409).json({
                erro: 'CPF ou email já cadastrado',
                
            })
        }
        return res.status(500).json({
        erro: 'Erro ao atualizar',
        detalhes: error.message
        })
    }
           
    }

    async deletar(req, res){
        try{
            const participante = await Participante.findByPk(req.params.id)

            if(!participante){
                return res.status(404).json({
                    erro: 'Participante não encontrado'
                })
            }

            await participante.destroy()

            return res.status(200).json({
                mensagem: 'Participante excluido com sucesso!'
            })
        }
        catch(error){
            res.status(500).json({
                erro: 'Erro ao excluir participante',
                detalhes: error.message
            })
        }
    }

    async substituir(req, res) {
        try{
            const participante = await Participante.findByPk(req.params.id)

            if(!participante) {
                return res.status(404).json({
                    erro: 'Participante não encontrado'
                })
            }

            const {nome, email, telefone, cpf, turma, turno} = req.body

            if(!nome || !email || !telefone || !cpf || !turma || !turno){
                return res.status(400).json({
                    erro: 'Todos os campos são obrigatórios para o put'
                })
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailValido.test(email)) {
                return res.status(400).json({
                    erro: 'Formato de email inválido'
                })
            }

            await participante.update({
                nome,
                email,
                telefone,
                cpf,
                turma,
                turno
            })

            return res.status(200).json(participante)
        }
        catch(error){


            if(error.name === 'SequelizeUniqueConstraintError'){ //se alguém tentar cadastrar um cpf ou emial que pertence a outro participante

                return res.status(409).json({
                erro: 'CPF ou email já cadastrado',
                
            })

        }
        return res.status(500).json({
                erro: 'Erro ao substituir participante',
                detalhes: error.message
            })
    }

}
}

module.exports = new ParticipanteController()