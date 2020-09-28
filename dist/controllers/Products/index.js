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
exports.putProduct = exports.deleteProduct = exports.postProducts = exports.getProducts = void 0;
const Product_1 = require("../../models/Product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        res.status(200).json({ products });
    }
    catch (error) {
        throw error;
    }
});
exports.getProducts = getProducts;
const postProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const product = new Product_1.default({
            description: body.description,
            qty: body.qty,
            price: body.price,
        });
        const newProduct = yield product.save();
        const allProducts = yield Product_1.default.find();
        res.status(201).json({
            message: "Produto inserido com sucesso",
            product: newProduct,
            products: allProducts
        });
    }
    catch (error) {
        throw error;
    }
});
exports.postProducts = postProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield Product_1.default.findByIdAndRemove(req.params.id);
        const allProducts = yield Product_1.default.find();
        res.status(200).json({
            message: "Produto removido",
            product: deletedProduct,
            products: allProducts
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteProduct = deleteProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedProduct = yield Product_1.default.findByIdAndUpdate({ _id: id }, body);
        const allProducts = yield Product_1.default.find();
        res.status(200).json({
            message: "Produto atualizado",
            product: updatedProduct,
            products: allProducts
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.putProduct = putProduct;
