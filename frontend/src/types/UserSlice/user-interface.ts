import {IUser} from "../../models/IUser";

export interface AuthResponse {
   token: string;
   refreshToken: string;
   user: IUser
}

export interface PropsDataType {
   email: string;
   password: string;
}

export interface ActionPayload {
   payload: IUser
}

export enum Roles {
   ADMIN = 'ADMIN',
   USER = 'USER'
}

export enum Status {
   ERROR = 'ERROR',
   LOADING = 'LOADING',
   SUCCESS = 'SUCCESS',
   PENDING = 'PENDING'
}