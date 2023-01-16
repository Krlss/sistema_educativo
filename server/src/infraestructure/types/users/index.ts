import { Rol } from "../../../domain/roles/rol.entity";

export interface UserProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserCreateProps extends UserProps {
  roles: number[];
}

export interface UserSaveProps extends UserProps {
  roles: Rol[];
}

export interface UserUpdateProps extends UserProps {
  roles?: number[];
}
