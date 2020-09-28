import { Request, Response } from 'express'
import { IProduct } from '../../types/Products'
import Product from '../../models/Product'

const getProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        const products: IProduct[] = await Product.find()

        res.status(200).json({ products })
    }
    catch(error) {
        throw error
    }
}

const postProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick <IProduct, "description" | "qty" | "price">

        const product: IProduct = new Product({ 
            description: body.description,
            qty: body.qty,
            price: body.price,
        })

        const newProduct: IProduct = await product.save()

        const allProducts: IProduct[] = await Product.find()

        res.status(201).json({
            message: "Produto inserido com sucesso",
            product: newProduct,
            products: allProducts
        })
    }
    catch(error) {
        throw error
    }
}

const deleteProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id)

        const allProducts: IProduct[] = await Product.find()

        res.status(200).json({
            message: "Produto removido",
            product: deletedProduct,
            products: allProducts
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

const putProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatedProduct: IProduct | null = await Product.findByIdAndUpdate({ _id: id }, body)

        const allProducts: IProduct[] = await Product.find()

        res.status(200).json({
            message: "Produto atualizado",
            product: updatedProduct,
            products: allProducts
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

export { getProducts, postProducts, deleteProduct, putProduct }
