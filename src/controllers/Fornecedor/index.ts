import { Request, Response } from 'express'
import { IFornecedor } from '../../types/Fornecedor'
import Fornecedor from '../../models/Fornecedor'

const getFornecedor = async(req: Request, res: Response): Promise<void> => {
    try {
        const fornecedor: IFornecedor[] = await Fornecedor.find()

        res.status(200).json({ fornecedor })
    }
    catch(error) {
        throw error
    }
}

const postFornecedor = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick <IFornecedor, "cnpj" | "razaoSocial">

        const fornecedor: IFornecedor = new Fornecedor({ 
            cnpj: body.cnpj,
            razaoSocial: body.razaoSocial,
        })

        const newFornecedor: IFornecedor = await fornecedor.save()

        const allFornecedores: IFornecedor[] = await Fornecedor.find()

        res.status(201).json({
            message: "Fornecedor inserido com sucesso",
            product: newFornecedor,
            products: allFornecedores
        })
    }
    catch(error) {
        throw error
    }
}

export { getFornecedor, postFornecedor }
