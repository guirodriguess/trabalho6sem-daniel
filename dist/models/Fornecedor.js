"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const fornecedorSchema = new mongoose_1.Schema({
    cnpj: {
        type: String,
        required: true,
    },
    razaoSocial: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("Fornecedor", fornecedorSchema);
