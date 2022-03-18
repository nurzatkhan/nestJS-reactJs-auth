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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const createUserDto_1 = require("../users/dto/createUserDto");
const loginUserDto_1 = require("../users/dto/loginUserDto");
const UpdateUserDto_1 = require("../users/dto/UpdateUserDto");
const auth_service_1 = require("./auth.service");
const UserID_auth_guard_1 = require("./UserID-auth-guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(userDto) {
        console.log(userDto);
        return this.authService.register(userDto);
    }
    login(dto) {
        return this.authService.login(dto);
    }
    UpdateUser(userDto, id) {
        return this.authService.UpdateService(id, userDto);
    }
    getOne(id) {
        console.log(id);
        return this.authService.getOne(id);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.createUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUserDto_1.loginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(UserID_auth_guard_1.UserIDauth),
    (0, common_1.Put)("update/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserDto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "UpdateUser", null);
__decorate([
    (0, common_1.UseGuards)(UserID_auth_guard_1.UserIDauth),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getOne", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map