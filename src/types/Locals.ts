import { Document } from "mongoose"

export interface ILocal extends Document {
    name: string
    type: string
    rentPrice: number
    maxCapacity: number
}