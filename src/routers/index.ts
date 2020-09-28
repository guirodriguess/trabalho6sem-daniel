import	{ Router } from 'express'
import { getClients, postClients, deleteClient, putClient } from '../controllers/Clients'
import { getLocals, postLocals, deleteLocal, putLocal } from '../controllers/Locals'
import { getProducts, postProducts, deleteProduct, putProduct } from '../controllers/Products/index'
import { getMotos, postMotos, deleteMoto, putMoto } from '../controllers/MotoBikes/index'
import { getFornecedor, postFornecedor } from '../controllers/Fornecedor/index'

const router: Router = Router()

// Clients routers

router.get("/clients", getClients)
router.post("/add-client", postClients)
router.delete("/delete-client/:id", deleteClient)
router.put("/update-client/:id", putClient)

// Products routers

router.get("/products", getProducts)
router.post("/add-product", postProducts)
router.delete("/delete-product/:id", deleteProduct)
router.put("/update-product/:id", putProduct)

// Locals routers

router.get("/locals", getLocals)
router.post("/add-local", postLocals)
router.delete("/delete-local/:id", deleteLocal)
router.put("/update-local/:id", putLocal)

// MotoBike routers

router.get("/moto", getMotos)
router.post("/add-moto", postMotos)
router.delete("/delete-moto/:id", deleteMoto)
router.put("/update-moto/:id", putMoto)

// Fornecedor routes

router.get("/fornecedor", getFornecedor)
router.post("/add-fornecedor", postFornecedor)


export default router
