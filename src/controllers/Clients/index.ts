import { Request, Response } from 'express'
import { IClient } from '../../types/Client'
import Client from '../../models/Client'

const getClients = async(req: Request, res: Response): Promise<void> => {
    try {
        const clients: IClient[] = await Client.find()

        res.status(200).json({ clients })
    }
    catch(error) {
        throw error
    }
}

const postClients = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick <IClient, "name" | "rg" | "age" | "address">

        const client: IClient = new Client({ 
            name: body.name,
            rg: body.rg,
            age: body.age,
            address: body.address
        })

        const newClient: IClient = await client.save()

        const allClients: IClient[] = await Client.find()

        res.status(201).json({
            message: "Cliente inserido com sucesso",
            client: newClient,
            clients: allClients
        })
    }
    catch(error) {
        throw error
    }
}

const deleteClient = async(req: Request, res: Response): Promise<void> => {
    try {
        const deletedClient = await Client.findByIdAndRemove(req.params.id)

        const allClients: IClient[] = await Client.find()

        res.status(200).json({
            message: "Cliente removido",
            client: deletedClient,
            clients: allClients
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

const putClient = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatedClient: IClient | null = await Client.findByIdAndUpdate({ _id: id }, body)

        const allClients: IClient[] = await Client.find()

        res.status(200).json({
            message: "Cliente atualizado",
            client: updatedClient,
            clients: allClients
        })
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

export { getClients, postClients, deleteClient, putClient }
