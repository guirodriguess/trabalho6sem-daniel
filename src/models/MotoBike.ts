import { IMotoBike } from '../types/MotoBikes'

import { model, Schema } from 'mongoose'

const motoSchema : Schema = new Schema(
    {
        brand: {
            type: String,
            required: true
        },

        displacement: {
            type: Number,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        cylinders: {
            type: Number,
            required: true
        }
    },

    { timestamps: true }
)

export default model<IMotoBike>("MotoBike", motoSchema)