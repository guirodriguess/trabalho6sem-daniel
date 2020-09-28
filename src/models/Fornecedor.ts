import { IFornecedor } from '../types/Fornecedor'

import { model, Schema } from 'mongoose'

const fornecedorSchema: Schema = new Schema (
    {
        cnpj: {
            type: String,
            required: true,

        },

        razaoSocial: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
)

export default model<IFornecedor>("Fornecedor", fornecedorSchema)