const Atividade = require('./atividade/modelo/Atividade');
const Palestrante = require('./palestrante/modelo/palestrante');
const Participante = require('./participante/modelo/Participante');

// Relacionamento N:N entre Palestrante e Atividade
Palestrante.belongsToMany(Atividade, {
    through: 'PalestranteAtividade'
});

Atividade.belongsToMany(Palestrante, {
    through: 'PalestranteAtividade'
});

// Relacionamento N:N entre Participante e Atividade
Participante.belongsToMany(Atividade, {
    through: 'ParticipanteAtividade'
});

Atividade.belongsToMany(Participante, {
    through: 'ParticipanteAtividade'
});

module.exports = {
    Atividade,
    Palestrante,
    Participante
};