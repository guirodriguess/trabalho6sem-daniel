import { Document } from "mongoose"

export interface IFornecedor extends Document {
    cnpj: string
    razaoSocial: string
}