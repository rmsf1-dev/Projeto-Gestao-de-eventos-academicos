import Atividade from './Atividade.js'




class AtividadeDAO {
    async criar(req, res) {
        try {
            const { sala, data, carga_horaria, vagas, atividade, horario, inscricoes } = req.body
            if (!sala || !data || !carga_horaria || !vagas || !atividade || !horario || !inscricoes) {
                return res.status(400).json({
                    erro: 'Todos os campos são obrigatórios!!'
                })
            }
            const evento = await Atividade.create({
                sala, data, carga_horaria, vagas, atividade, horario, inscricoes
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
            return res.status(400).json({ erro: 'erro ao listar Atividades', mensagem: error.message })
        }
    }
    async atualizar(req, res) {
        try {
            const atividadeA = await Atividade.findByPK(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não cadastrada'
                })
            }
            const { sala, data, carga_horaria, vagas, atividade, horario, inscricoes } = req.body
            await atividadeA.update({
                sala, data, carga_horaria, vagas, atividade, horario, inscricoes
            })
            return res.status(200).json(atividadeA)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async deletar(req, res) {
        try {
            const atividadeA = await Atividade.findByPK(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não encontrada'
                })
            }
            const { sala, data, carga_horaria, vagas, atividade, horario, inscricoes } = req.body

        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    async substituir(req, res) {
        try {
            const atividadeA = await Atividade.findByPK(req.params.id)
            if (!atividadeA) {
                return res.status(404).json({
                    erro: 'atividade não encontrada'
                })
            }
            if (!sala || !data || !carga_horaria || !vagas || !atividade || !horario || !inscricoes) {
                return res.status(400).json({
                    erro: 'Todos os campos são obrigatórios!!'
                })
            }
            await atividadeA.update({
                sala, data, carga_horaria, vagas, atividade, horario, inscricoes
            })
            return res.status(200).json(atividadeA)
        }catch (error) {
    return res.status(400).json(error.message)
}
            }
        }


module.exports = new AtividadeDAO()







/*class EventoDAO {
    async conexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
    async criarTabela() {
        const banco = await this.conexaoBanco()
        await banco.exec('CREATE TABLE IF NOT EXISTS tbl (id int, sala TEXT,data DATE,carga_horaria int,vagas INT,atividade TEXT, horario text, inscricoes INT)')
    }
    async inserir(tbl) {
        let { id,
    sala
            , data
            , carga_horaria
            , vagas
            , atividade
            , horario
            , inscricoes
    } = tbl
    const banco = await this.conexaoBanco()
        //await banco.exec(`INSERT INTO tbl VALUES (${id},"${texto}")`)
        await banco.run('INSERT INTO tbl(id,sala,data,carga_horaria,vagas,atividade,horario,inscricoes) VALUES (?,?,?,?,?,?,?,?)', id,)
    }
    async getAll(){
            const banco = await this.conexaoBanco()
            const info = await banco.exec('SELECT * FROM tbl')
            console.log(info)
        return info
    }
}*/