import { Document } from "mongoose"

export interface IMotoBike extends Document {
    brand: String
    displacement: number
    category: String
    cylinders: number
}