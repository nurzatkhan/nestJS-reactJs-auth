import { createUserDto } from './dto/createUserDto';
import { loginDto } from './dto/loginUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
export declare class UsersService {
    usersData: {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    }[];
    createUser(dto: createUserDto): {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    };
    getEmail(dto: loginDto): {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    };
    getAllUsers(): {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    }[];
    UpdateUser(id: number, dto: UpdateUserDto): {
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
