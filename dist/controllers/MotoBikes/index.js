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
exports.putMoto = exports.deleteMoto = exports.postMotos = exports.getMotos = void 0;
const MotoBike_1 = require("../../models/MotoBike");
const getMotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motos = yield MotoBike_1.default.find();
        res.status(200).json({ motos });
    }
    catch (error) {
        throw error;
    }
});
exports.getMotos = getMotos;
const postMotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const moto = new MotoBike_1.default({
            brand: body.brand,
            displacement: body.displacement,
            category: body.category,
            cylinders: body.cylinders,
        });
        const newMoto = yield moto.save();
        const allMotos = yield MotoBike_1.default.find();
        res.status(201).json({
            message: "Moto inserida com sucesso",
            product: newMoto,
            clients: allMotos
        });
    }
    catch (error) {
        throw error;
    }
});
exports.postMotos = postMotos;
const deleteMoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMoto = yield MotoBike_1.default.findByIdAndRemove(req.params.id);
        const allMotos = yield MotoBike_1.default.find();
        res.status(200).json({
            message: "Moto removida",
            client: deletedMoto,
            clients: allMotos
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteMoto = deleteMoto;
const putMoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedMoto = yield MotoBike_1.default.findByIdAndUpdate({ _id: id }, body);
        const allMotos = yield MotoBike_1.default.find();
        res.status(200).json({
            message: "Moto atualizada",
            client: updatedMoto,
            clients: allMotos
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.putMoto = putMoto;
