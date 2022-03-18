import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/gwt-awth-guard';
import { UserIDauth } from 'src/auth/UserID-auth-guard';
import { createUserDto } from './dto/createUserDto';
import { loginDto } from './dto/loginUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
        constructor(private userService: UsersService){}
    @UseGuards(JwtAuthGuard)
    @Get("/getAll")
    getAll(){
        return this.userService.getAllUsers();
    }
}
