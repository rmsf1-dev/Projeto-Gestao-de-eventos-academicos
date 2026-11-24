require('dotenv').config()// carrega as informações do .env para o Node.js consiga acessar

const{Sequelize} = require ('sequelize')// criando conecção com o banco usando as informações do .env

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,    
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

module.exports = sequelize;