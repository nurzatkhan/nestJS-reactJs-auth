import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';
import { loginDto } from './dto/loginUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Injectable()
export class UsersService {
    usersData = [{id:0, email:'ADMIN', password:"ADMIN", name : "ADMIN", surname:"ADMINOV", role:"ADMIN"}]


    createUser (dto: createUserDto){
        let result = this.usersData.filter((item) => item.email === dto.email);
        let newArr = this.usersData.push({id: this.usersData.length, email:dto.email, password:dto.password, name : dto.name, surname:dto.surname, role:"USER"})
        return this.usersData[this.usersData.length-1]
    }
    getEmail (dto: loginDto){
        let result = this.usersData.filter((item) => item.email === dto.email);
        if(!result[0]){
            return result[0]
        }else{ 
            return result[0]
        }
    }
    getAllUsers(){
        return this.usersData; 
    }
    UpdateUser(id:number, dto: UpdateUserDto){
        console.log(dto)
        this.usersData[id]= {id:id, email:dto.email, password: this.usersData[id].password, name:dto.name, surname:dto.surname, role:this.usersData[id].role}
        return this.usersData
    }
    getOne(id:number){
        const post =  this.usersData[id]
        return {email: post.email, id: post.id, name: post.name, surname:post.surname}
    }
}
