import * as service from '../../../database/service/UserService';
import {CreateUserDTO, FilterUsertsDTO, UpdateUserDTO} from '../../dto/User.dto'
import {User} from '../../interface'
import * as mapper from './mapper'

export const create = async(payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.create(payload))
}

export const update = async (id: number, payload: UpdateUserDTO): Promise<User> => {
    return mapper.toUser(await service.update(id, payload))
}
export const getById = async (id: number): Promise<User> => {
    return mapper.toUser(await service.getById(id))
}
export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(filters: FilterUsertsDTO): Promise<User[]> => {
    return (await service.getAll(filters)).map(mapper.toUser)
}