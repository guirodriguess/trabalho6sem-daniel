import { IProduct } from '../types/Products'

import { model, Schema } from 'mongoose'

const productSchema: Schema = new Schema (
    {
        description: {
            type: String,
            required: true,

        },

        qty: {
            type: Number,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
    },

    { timestamps: true }
)

export default model<IProduct>("Product", productSchema)