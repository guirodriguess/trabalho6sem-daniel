"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send(`Bom dia cliente, obrigado pela sua consulta`);
});
router.get('/:nome', (req, res) => {
    let nome = req.params.nome;
    res.send(`Bom dia ${nome}, obrigado pela sua consulta`);
});
exports.ClienteController = router;
