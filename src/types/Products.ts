import { Document } from "mongoose"

export interface IProduct extends Document {
    description: string
    qty: number
    price: number
}