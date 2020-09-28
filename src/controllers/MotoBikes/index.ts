import { Request, Response } from 'express'
import { IMotoBike } from '../../types/MotoBikes'
import MotoBike from '../../models/MotoBike'

const getMotos = async(req: Request, res: Response): Promise<void> => {
    try {
        const motos: IMotoBike[] = await MotoBike.find()

        res.status(200).json({ motos })
    }
    catch(error) {
        throw error
    }
}

const postMotos = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick <IMotoBike, "brand" | "displacement" | "category" | "cylinders">

        const moto: IMotoBike = new MotoBike({ 
            brand: body.brand,
            displacement: body.displacement,
            category: body.category,
            cylinders: body.cylinders,
        })

        const newMoto: IMotoBike = await moto.save()

        const allMotos: IMotoBike[] = await MotoBike.find()

        res.status(201).json({
            message: "Moto inserida com sucesso",
            product: newMoto,
            clients: allMotos
        })
    }
    catch(error) {
        throw error
    }
}

const deleteMoto = async(req: Request, res: Response): Promise<void> => {
    try {
        const deletedMoto = await MotoBike.findByIdAndRemove(req.params.id)

        const allMotos: IMotoBike[] = await MotoBike.find()

        res.status(200).json({
            message: "Moto removida",
            client: deletedMoto,
            clients: allMotos
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

const putMoto = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatedMoto: IMotoBike | null = await MotoBike.findByIdAndUpdate({ _id: id }, body)

        const allMotos: IMotoBike[] = await MotoBike.find()

        res.status(200).json({
            message: "Moto atualizada",
            client: updatedMoto,
            clients: allMotos
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

export { getMotos, postMotos, deleteMoto, putMoto }
