"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routers_1 = require("./routers");
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routers_1.default);
const porta = 3003;
const uri = 'mongodb://localhost:27017';
mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => server.listen(porta, () => console.log(`Server running on http://localhost:${porta}`)))
    .catch(error => {
    throw error;
});
