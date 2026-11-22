const sequelize = require('./src/config/database');

const Participante = require('./src/participante/modelo/Participante');

async function testarConexao() {
    try {
        await sequelize.authenticate();
        await Participante.sync(); //sync sincroniza com o modelo com o banco
        console.log('Tabela Participante sincronizada!');

        console.log('Conexão estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro na conexão:', error.message);
    } finally {
        await sequelize.close();
    }
}

testarConexao();