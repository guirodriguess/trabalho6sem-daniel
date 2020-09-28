"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const localSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    rentPrice: {
        type: Number,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("Local", localSchema);
