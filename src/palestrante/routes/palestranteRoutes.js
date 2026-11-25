const express = require("express");
const router = express.Router();
console.log("Rotas de palestrante carregadas!");
const PalestranteController = require("../controllers/palestranteController");

router.post("/", PalestranteController.criar);
router.get("/", PalestranteController.listar);
router.patch("/:id", PalestranteController.atualizar);
router.delete("/:id", PalestranteController.deletar);
router.put("/:id", PalestranteController.substituir);

module.exports = router;
