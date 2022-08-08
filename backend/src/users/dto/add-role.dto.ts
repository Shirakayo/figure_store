import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
	@IsString({message: 'Always a string value'})
	readonly value: string;
	@IsNumber({},{message: 'Always a number value'})
	readonly userId: number;
}