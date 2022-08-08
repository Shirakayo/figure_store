import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from 'class-validator'

export class CreateUserDto {
	
	@ApiProperty({example: 'user@gmail.com', description: 'Mailing Address'})
	@IsString({message: 'Always a string value'})
	@IsEmail({},{message: 'Invalid email'})
	readonly email: string;
	
	@ApiProperty({example: '49U1jW*Xy^Rt', description: 'Password'})
	@IsString({message: 'Always a string value'})
	@Length(4, 20, {message: 'Incorrect password length'})
	readonly password: string;
}