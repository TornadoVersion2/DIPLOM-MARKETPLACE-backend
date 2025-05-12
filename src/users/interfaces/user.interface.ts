import { Role } from '../../role.enum';

export interface IUser {
  id: number;
  email: string;
  name?: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserWithPassword extends IUser {
  password: string;
} 