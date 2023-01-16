import { User } from "../../domain/users/user.entity";
import { userCreateInput } from "../validations/users/user.create.inputs";
import { UserUpdateProps } from "../types/users";
import { Rol } from "../../domain/roles/rol.entity";

export interface userControllerInterface {
  getUsers(): Promise<User[] | []>;
  getUserById(id: number): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  getUsersByRol(rol: string): Promise<User[] | []>;
  createUser(user: userCreateInput): Promise<boolean | unknown>;
  updateUser(id: number, props: UserUpdateProps): Promise<boolean | unknown>;
  deleteUser(id: number): Promise<boolean | unknown>;
}

export interface userServiceInterface {
  findAll(): Promise<User[] | []>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAllByRol(rol: string): Promise<User[] | []>;
  create(user: User): Promise<boolean | unknown>;
  update(user: User): Promise<boolean | unknown>;
  delete(id: number): Promise<boolean | unknown>;
}

export interface userEntityInterface {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  roles: Rol[];
  createdAt?: Date;
  updatedAt?: Date;
}
