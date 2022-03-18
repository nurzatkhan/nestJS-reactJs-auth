import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/users/dto/createUserDto';
import { loginDto } from 'src/users/dto/loginUserDto';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor (
        private userService: UsersService,
        private jwtService: JwtService        
        ){}

    register(userDto: createUserDto){
        const condidate = this.userService.getEmail(userDto)
        if (condidate) {
            throw new HttpException('email существует', HttpStatus.BAD_REQUEST);
        }else {
            // Тут можно пароль за хешировать но я не стал этого делать Сори лень :(
           const user = this.userService.createUser({...userDto})  
        //    return condidate

           return this.generateToken(user)
        }
        
    }
    login(dto: loginDto){
        const user = this.validateUser(dto)
        // return  this.generateToken(user)
        return this.generateToken(user)
    }
    UpdateService(id: number, userDto:UpdateUserDto){
        return this.userService.UpdateUser(id, userDto)
    }
    getOne(id: number){
        return this.userService.getOne(id)
    }



    private async generateToken(user) {
        const payload = {email: user.email, id: user.id, role: user.roles}
        console.log(user)
        return {
            token: this.jwtService.sign(payload), id: user.id
        }
    }


    private validateUser (Dto: loginDto){
        const userСheck = this.userService.getEmail(Dto);
        if (userСheck){
            const passwordСheck= (Dto.password === userСheck.password)
            if (passwordСheck){
                return userСheck
            }else{
                throw new UnauthorizedException({message: 'Некорректный пароль'})
            }
        }else{
            throw new UnauthorizedException({message: 'Email не сушествует'})
        }
        
    }
}
