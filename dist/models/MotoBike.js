"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const motoSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true
    },
    displacement: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cylinders: {
        type: Number,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model("MotoBike", motoSchema);
