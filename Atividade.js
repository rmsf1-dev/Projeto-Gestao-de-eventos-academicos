const {dataTypes} = require('sequelize')
const sequelize = require('../../config/database')

const Atividade = sequelize.define('Atividade',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sala:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.date,
        allowNull:false
    },
    carga_hr:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    vagas:{
        type:DataTypes.integer,
        allowNull:false
    },
    atividade:{
        type: DataTypes.string,
        allowNull:false
    },
    horario:{
        type:DataTypes.string,
        allowNull:false
    },
    inscricoes:{
        type: DataTypes.integer,
        allowNull:false
    }
})

module.exports = Atividade


/*class Evento {
    #id
    #sala
    #data
    #carga_horaria
    #vagas
    #atividade
    #horario
    #inscricoes
    constructor(id, s, dt, ch, v,t, h, i) {
        this.#id = id
        this.#atividade = t
        this.#carga_horaria = ch
        this.#vagas = v
        this.#horario = h
        this.#inscricoes = i
        this.#sala = s
    }

}

class Palestra extends Evento {
    #palestrante
}
class Minicurso extends Evento {

}

const tbl1 = new Evento(1,"sala-1","2026-1-2",2000,20,"marcacao","20h-19h",1)
const dao1 = new EventoDAO()
dao1.inserir(tbl1)

export {dao1}*/