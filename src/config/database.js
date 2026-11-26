const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});
console.log('Variáveis carregadas:');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_DIALECT:', process.env.DB_DIALECT);
const{Sequelize} = require ('sequelize')// criando conexão com o banco usando as informações do .env

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