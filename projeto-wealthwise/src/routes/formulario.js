var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.get("/exibir", function (req, res) {
  formularioController.exibir(req, res);
});

router.post("/cadastrar", function (req, res) {
  formularioController.cadastrar(req, res);
})

router.post("/cadastrar2", function (req, res) {
  formularioController.cadastrar2(req, res);
})

module.exports = router;