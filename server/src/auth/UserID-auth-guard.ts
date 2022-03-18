import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import e from "express";
import { Observable } from "rxjs";


@Injectable()
export class UserIDauth implements CanActivate{
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
            try{
                const authHeader = req.headers.authorization;
                const bearer = authHeader.split(' ')[0]
                const token = authHeader.split(' ')[1]
                if (bearer !== 'Bearer' || !token) {
                    throw new UnauthorizedException({message: 'Not token'})
                }
                const user = this.jwtService.verify(token)
                console.log(token)
                console.log(user)
                console.log(req.params.id)


                if (user.id == req.params.id) {
                    console.log(token)
                    return true;

                }

            }catch(e){
                console.log(e)
                throw new UnauthorizedException({message: 'Not token'})
            }
            
            

     
    }
}