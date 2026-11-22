const {DataTypes} = require('sequelize')

const sequelize = require('../../config/database')

const Participante = sequelize.define('Participante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    turma: {
        type: DataTypes.STRING,
        allowNull: false
    },

    turno: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Participante