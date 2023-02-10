import { Body, Controller, Get, Param, Post } from '@nestjs/common';


//EL CONTROLADOR// lo que esta entre parentecis sera la ruta mapeada

@Controller('tuits')
export class TuitsController {

    //las rutas se ejecutan en el orden en el que son puestas

    //este es el decorador con el metodo GET
    @Get()
    getTuits() {
        return "Hello from twitter"
    }

    //La funcion debe ser distinta, no se debe repetir 
    //getTuits getTuit
    @Get(':id') 
    getTuit(@Param() params) {
        return `Your tuit id is ${params.id}`
    }
    //Variante
    //getTuit(@Param('id') id: string): string {
    //    return `Your tuit id is ${id}`
    //}

    @Post()
    createTuit(@Body() body){
    return body}






}
