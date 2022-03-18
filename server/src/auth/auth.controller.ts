import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/createUserDto';
import { loginDto } from 'src/users/dto/loginUserDto';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';
import { AuthService } from './auth.service';
import { UserIDauth } from './UserID-auth-guard';

@Controller('auth')
export class AuthController {
        constructor(private authService: AuthService) {}
    @Post('/register')
    register(@Body() userDto: createUserDto){
        console.log(userDto)
        return this.authService.register(userDto)
    }
    @Post('/login')
    login(@Body() dto: loginDto){
        return this.authService.login(dto)
    }


    @UseGuards(UserIDauth)
    @Put("update/:id")
    UpdateUser(@Body() userDto:UpdateUserDto, @Param('id') id: number){
        return this.authService.UpdateService(id, userDto);
    }

    @UseGuards(UserIDauth) 
    @Get(':id')
    getOne(@Param('id') id: number){
        console.log(id)
        return this.authService.getOne(id)
    }



}
