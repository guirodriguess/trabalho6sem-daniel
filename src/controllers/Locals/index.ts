import { Request, Response } from 'express'
import { ILocal } from '../../types/Locals'
import Local from '../../models/Local'

const getLocals = async(req: Request, res: Response): Promise<void> => {
    try {
        const local: ILocal[] = await Local.find()

        res.status(200).json({ local })
    }
    catch(error) {
        throw error
    }
}

const postLocals = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick <ILocal, "name" | "type" | "rentPrice" | "maxCapacity">

        const local: ILocal = new Local({ 
            name: body.name,
            type: body.type,
            rentPrice: body.rentPrice,
            maxCapacity: body.maxCapacity,
        })

        const newLocal: ILocal = await local.save()

        const allLocals: ILocal[] = await Local.find()

        res.status(201).json({
            message: "Local inserido com sucesso",
            local: newLocal,
            locals: allLocals
        })
    }
    catch(error) {
        throw error
    }
}

const deleteLocal = async(req: Request, res: Response): Promise<void> => {
    try {
        const deletedLocal = await Local.findByIdAndRemove(req.params.id)

        const allLocals: ILocal[] = await Local.find()

        res.status(200).json({
            message: "Local removido",
            local: deletedLocal,
            locals: allLocals
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

const putLocal = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatedLocal: ILocal | null = await Local.findByIdAndUpdate({ _id: id }, body)

        const allLocals: ILocal[] = await Local.find()

        res.status(200).json({
            message: "Local atualizado",
            local: updatedLocal,
            locals: allLocals
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

export { getLocals, postLocals, deleteLocal, putLocal }
