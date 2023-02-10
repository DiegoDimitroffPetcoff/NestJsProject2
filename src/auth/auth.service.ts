import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return {msg:'I am signup in SERRVICE'}
    }
    signin() {
        return 'I am signIN  in SERRVICE'
    }
}