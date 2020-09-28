"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFornecedor = exports.getFornecedor = void 0;
const Fornecedor_1 = require("../../models/Fornecedor");
const getFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fornecedor = yield Fornecedor_1.default.find();
        res.status(200).json({ fornecedor });
    }
    catch (error) {
        throw error;
    }
});
exports.getFornecedor = getFornecedor;
const postFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const fornecedor = new Fornecedor_1.default({
            cnpj: body.cnpj,
            razaoSocial: body.razaoSocial,
        });
        const newFornecedor = yield fornecedor.save();
        const allFornecedores = yield Fornecedor_1.default.find();
        res.status(201).json({
            message: "Fornecedor inserido com sucesso",
            product: newFornecedor,
            products: allFornecedores
        });
    }
    catch (error) {
        throw error;
    }
});
exports.postFornecedor = postFornecedor;
