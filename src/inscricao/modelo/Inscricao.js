const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database')

const Inscricao = sequelize.define('Inscricao', {
    presente: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

module.exports = Inscricao