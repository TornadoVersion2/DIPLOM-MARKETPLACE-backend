import { Role } from '../../role.enum';

export interface IUser {
  id: number;
  email: string;
  name?: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
  managerClaim?: boolean;
}

export interface IUserWithPassword extends IUser {
  password: string;
} 