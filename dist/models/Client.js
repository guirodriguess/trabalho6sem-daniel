"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.default = mongoose_1.model("Client", clientSchema);
