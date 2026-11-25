const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Palestrante = sequelize.define("Palestrante", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  areaAtuacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  miniCurriculo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Palestrante;
