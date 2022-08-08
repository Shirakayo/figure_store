import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {User} from "../users/user.model";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
	
	constructor(private authService: AuthService) {}
	
	
	@Post('/login')
	login(@Body() userDto: CreateUserDto) {
		return this.authService.login(userDto)
	}
	
	@Post('/registration')
	register(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto)
	}
	
	@Post('/refresh')
	@UseGuards(JwtAuthGuard)
	authCheck(@Body() user: User) {
		return this.authService.authCheck(user)
	}
	
}
