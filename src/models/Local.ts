import { ILocal } from '../types/Locals'

import { model, Schema } from 'mongoose'

const localSchema: Schema = new Schema (
    {
        name: {
            type: String,
            required: true,

        },

        type: {
            type: String,
            required: true,
        },

        rentPrice: {
            type: Number,
            required: true,
        },

        maxCapacity: {
            type: Number,
            required: true,
        },
    },

    { timestamps: true }
)

export default model<ILocal>("Local", localSchema)