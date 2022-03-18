import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/users/dto/createUserDto';
import { loginDto } from 'src/users/dto/loginUserDto';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(userDto: createUserDto): Promise<{
        token: string;
        id: any;
    }>;
    login(dto: loginDto): Promise<{
        token: string;
        id: any;
    }>;
    UpdateService(id: number, userDto: UpdateUserDto): {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    }[];
    getOne(id: number): {
        email: string;
        id: number;
        name: string;
        surname: string;
    };
    private generateToken;
    private validateUser;
}
