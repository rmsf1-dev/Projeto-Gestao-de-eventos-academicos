const Palestrante = require("../modelo/palestrante");

class PalestranteController {
  async criar(req, res) {
    try {
      const palestrante = await Palestrante.create(req.body);
      return res.status(201).json(palestrante);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    try {
      const palestrantes = await Palestrante.findAll();
      return res.json(palestrantes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const palestrante = await Palestrante.findByPk(req.params.id);

      if (!palestrante) {
        return res.status(404).json({ erro: "Palestrante não encontrado" });
      }

      await palestrante.update(req.body);
      return res.json(palestrante);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const palestrante = await Palestrante.findByPk(req.params.id);

      if (!palestrante) {
        return res.status(404).json({ erro: "Palestrante não encontrado" });
      }

      await palestrante.destroy();
      return res.json({ mensagem: "Palestrante removido com sucesso" });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async substituir(req, res) {
    try {
      const palestrante = await Palestrante.findByPk(req.params.id);

      if (!palestrante) {
        return res.status(404).json({ erro: "Palestrante não encontrado" });
      }

      await palestrante.update(req.body);
      return res.json(palestrante);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new PalestranteController();
