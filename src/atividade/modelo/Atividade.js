const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database')

const Atividade = sequelize.define('Atividade',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sala:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull:false
    },
    carga_hr:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    vagas:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    atividade:{
        type: DataTypes.ENUM('Palestra', 'Minicurso'),
        allowNull:false
    },
    horario:{
        type:DataTypes.STRING,
        allowNull:false
    },
    inscricoes:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    declaracao:{
        type: DataTypes.STRING,
        allowNull:true
    }
})

module.exports = Atividade


