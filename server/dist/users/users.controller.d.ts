import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): {
        id: number;
        email: string;
        password: string;
        name: string;
        surname: string;
        role: string;
    }[];
}
