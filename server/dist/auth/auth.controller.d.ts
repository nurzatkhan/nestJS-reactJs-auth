import { createUserDto } from 'src/users/dto/createUserDto';
import { loginDto } from 'src/users/dto/loginUserDto';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userDto: createUserDto): Promise<{
        token: string;
        id: any;
    }>;
    login(dto: loginDto): Promise<{
        token: string;
        id: any;
    }>;
    UpdateUser(userDto: UpdateUserDto, id: number): {
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
}
