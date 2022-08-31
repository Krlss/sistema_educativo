import * as UserDAl from '../dal/User';
import {GetAllUserFilters} from '../dal/types';
import {UserInput, UserOuput} from '../models/User';

export const create = (payload: UserInput): Promise<UserOuput> => {
    return UserDAl.create(payload)
};

export const update = (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
    return UserDAl.update(id, payload)
}
export const getById = (ID: number): Promise<UserOuput> => {
    return UserDAl.getById(ID);
}
export const deleteById = (ID: number): Promise<boolean> => {
    return UserDAl.deleteById(ID)
}
export const getAll = (filters: GetAllUserFilters): Promise<UserOuput[]> => {
    return UserDAl.getAll(filters)
}