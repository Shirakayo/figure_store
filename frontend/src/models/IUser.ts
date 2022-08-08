type RolesType = {
  id: number;
  value: string;
  description: string;
}

export interface IUser {
    email: string;
    roles: RolesType
    id: number;
}