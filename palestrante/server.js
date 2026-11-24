const express = require("express");
const sequelize = require("./config/database");
require("./modelo/palestrante");

const palestranteRoutes = require("./routes/palestranteRoutes");

console.log("Rotas carregadas!");

const app = express();
app.use(express.json());

app.use("/palestrantes", palestranteRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

sequelize
  .sync()
  .then(() => console.log("Banco conectado e tabelas sincronizadas!"))
  .catch((error) => console.log("Erro:", error.message));
