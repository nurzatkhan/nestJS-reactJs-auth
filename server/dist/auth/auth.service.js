"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    register(userDto) {
        const condidate = this.userService.getEmail(userDto);
        if (condidate) {
            throw new common_1.HttpException('email существует', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            const user = this.userService.createUser(Object.assign({}, userDto));
            return this.generateToken(user);
        }
    }
    login(dto) {
        const user = this.validateUser(dto);
        return this.generateToken(user);
    }
    UpdateService(id, userDto) {
        return this.userService.UpdateUser(id, userDto);
    }
    getOne(id) {
        return this.userService.getOne(id);
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, role: user.roles };
        console.log(user);
        return {
            token: this.jwtService.sign(payload), id: user.id
        };
    }
    validateUser(Dto) {
        const userСheck = this.userService.getEmail(Dto);
        if (userСheck) {
            const passwordСheck = (Dto.password === userСheck.password);
            if (passwordСheck) {
                return userСheck;
            }
            else {
                throw new common_1.UnauthorizedException({ message: 'Некорректный пароль' });
            }
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Email не сушествует' });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map