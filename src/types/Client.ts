import { Document } from "mongoose"

export interface IClient extends Document {
    name: string
    rg: string
    age: number
    address: string
}