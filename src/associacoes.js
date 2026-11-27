const Atividade = require('./atividade/modelo/Atividade');
const Palestrante = require('./palestrante/modelo/palestrante');
const Participante = require('./participante/modelo/Participante');
const Inscricao = require('./inscricao/modelo/Inscricao')

// Relacionamento N:N entre Palestrante e Atividade
Palestrante.belongsToMany(Atividade, {
    through: 'PalestranteAtividade'
});

Atividade.belongsToMany(Palestrante, {
    through: 'PalestranteAtividade'
});

// Relacionamento N:N entre Participante e Atividade
Participante.belongsToMany(Atividade, {
    through: Inscricao
});

Atividade.belongsToMany(Participante, {
    through: Inscricao
});

Inscricao.belongsTo(Atividade);

Inscricao.belongsTo(Participante)

module.exports = {
    Atividade,
    Palestrante,
    Participante,
    Inscricao
};