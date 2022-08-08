import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttr {
	value: string;
	description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr > {
	
	@ApiProperty({example: '1', description: 'Unique identifier'})
	@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id: number;
	
	@ApiProperty({example: 'ADMIN', description: 'The meaning of the user role'})
	@Column({type: DataType.STRING, unique: true, allowNull: false})
	value: string;
	
	@ApiProperty({example: 'Administrator', description: 'Role Description'})
	@Column({type: DataType.STRING, allowNull: false})
	description: string;
	
	@BelongsToMany(() => User, () => UserRoles)
	users: User[]
}