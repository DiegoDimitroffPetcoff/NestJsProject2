import { Injectable } from '@nestjs/common';

//Un servicio no es mas que una clase que contiene el decorador
//injectable

//Este es el servicio que viene por defecto
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
