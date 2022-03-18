"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.usersData = [{ id: 0, email: 'ADMIN', password: "ADMIN", name: "ADMIN", surname: "ADMINOV", role: "ADMIN" }];
    }
    createUser(dto) {
        let result = this.usersData.filter((item) => item.email === dto.email);
        let newArr = this.usersData.push({ id: this.usersData.length, email: dto.email, password: dto.password, name: dto.name, surname: dto.surname, role: "USER" });
        return this.usersData[this.usersData.length - 1];
    }
    getEmail(dto) {
        let result = this.usersData.filter((item) => item.email === dto.email);
        if (!result[0]) {
            return result[0];
        }
        else {
            return result[0];
        }
    }
    getAllUsers() {
        return this.usersData;
    }
    UpdateUser(id, dto) {
        console.log(dto);
        this.usersData[id] = { id: id, email: dto.email, password: this.usersData[id].password, name: dto.name, surname: dto.surname, role: this.usersData[id].role };
        return this.usersData;
    }
    getOne(id) {
        const post = this.usersData[id];
        return { email: post.email, id: post.id, name: post.name, surname: post.surname };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map