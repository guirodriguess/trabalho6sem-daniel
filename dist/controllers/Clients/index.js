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
exports.putClient = exports.deleteClient = exports.postClients = exports.getClients = void 0;
const Client_1 = require("../../models/Client");
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield Client_1.default.find();
        res.status(200).json({ clients });
    }
    catch (error) {
        throw error;
    }
});
exports.getClients = getClients;
const postClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const client = new Client_1.default({
            name: body.name,
            rg: body.rg,
            age: body.age,
            address: body.address
        });
        const newClient = yield client.save();
        const allClients = yield Client_1.default.find();
        res.status(201).json({
            message: "Cliente inserido com sucesso",
            client: newClient,
            clients: allClients
        });
    }
    catch (error) {
        throw error;
    }
});
exports.postClients = postClients;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedClient = yield Client_1.default.findByIdAndRemove(req.params.id);
        const allClients = yield Client_1.default.find();
        res.status(200).json({
            message: "Cliente removido",
            client: deletedClient,
            clients: allClients
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteClient = deleteClient;
const putClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedClient = yield Client_1.default.findByIdAndUpdate({ _id: id }, body);
        const allClients = yield Client_1.default.find();
        res.status(200).json({
            message: "Cliente atualizado",
            client: updatedClient,
            clients: allClients
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.putClient = putClient;
