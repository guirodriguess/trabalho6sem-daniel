"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Clients_1 = require("../controllers/Clients");
const Locals_1 = require("../controllers/Locals");
const index_1 = require("../controllers/Products/index");
const index_2 = require("../controllers/MotoBikes/index");
const index_3 = require("../controllers/Fornecedor/index");
const router = express_1.Router();
// Clients routers
router.get("/clients", Clients_1.getClients);
router.post("/add-client", Clients_1.postClients);
router.delete("/delete-client/:id", Clients_1.deleteClient);
router.put("/update-client/:id", Clients_1.putClient);
// Products routers
router.get("/products", index_1.getProducts);
router.post("/add-product", index_1.postProducts);
router.delete("/delete-product/:id", index_1.deleteProduct);
router.put("/update-product/:id", index_1.putProduct);
// Locals routers
router.get("/locals", Locals_1.getLocals);
router.post("/add-local", Locals_1.postLocals);
router.delete("/delete-local/:id", Locals_1.deleteLocal);
router.put("/update-local/:id", Locals_1.putLocal);
// MotoBike routers
router.get("/moto", index_2.getMotos);
router.post("/add-moto", index_2.postMotos);
router.delete("/delete-moto/:id", index_2.deleteMoto);
router.put("/update-moto/:id", index_2.putMoto);
// Fornecedor routes
router.get("/fornecedor", index_3.getFornecedor);
router.post("/add-fornecedor", index_3.postFornecedor);
exports.default = router;
