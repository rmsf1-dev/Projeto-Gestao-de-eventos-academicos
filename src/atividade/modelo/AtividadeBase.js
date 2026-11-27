class AtividadeBase {
    constructor(nome, sala, data, carga_hr, vagas, horario){
        this.nome = nome
        this.sala = sala
        this.data = data
        this.carga_hr = carga_hr
        this.vagas = vagas
        this.horario = horario
    }
}

module.exports = AtividadeBase;