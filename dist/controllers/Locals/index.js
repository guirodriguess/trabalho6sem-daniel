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
exports.putLocal = exports.deleteLocal = exports.postLocals = exports.getLocals = void 0;
const Local_1 = require("../../models/Local");
const getLocals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const local = yield Local_1.default.find();
        res.status(200).json({ local });
    }
    catch (error) {
        throw error;
    }
});
exports.getLocals = getLocals;
const postLocals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const local = new Local_1.default({
            name: body.name,
            type: body.type,
            rentPrice: body.rentPrice,
            maxCapacity: body.maxCapacity,
        });
        const newLocal = yield local.save();
        const allLocals = yield Local_1.default.find();
        res.status(201).json({
            message: "Local inserido com sucesso",
            local: newLocal,
            locals: allLocals
        });
    }
    catch (error) {
        throw error;
    }
});
exports.postLocals = postLocals;
const deleteLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLocal = yield Local_1.default.findByIdAndRemove(req.params.id);
        const allLocals = yield Local_1.default.find();
        res.status(200).json({
            message: "Local removido",
            local: deletedLocal,
            locals: allLocals
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteLocal = deleteLocal;
const putLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedLocal = yield Local_1.default.findByIdAndUpdate({ _id: id }, body);
        const allLocals = yield Local_1.default.find();
        res.status(200).json({
            message: "Local atualizado",
            local: updatedLocal,
            locals: allLocals
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.putLocal = putLocal;
