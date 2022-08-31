import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    ID: number, 
    CI: string, 
    username: string, 
    password: string, 
    email: string, 
    rol: string, 
    image?: string
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'image'>

export type FilterUsertsDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}