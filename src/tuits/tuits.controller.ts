import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';


//EL CONTROLADOR// lo que esta entre parentecis sera la ruta mapeada

@Controller('tuits')
export class TuitsController {

    //las rutas se ejecutan en el orden en el que son puestas
    //GET
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
    //POST
    @Post()
    createTuit(@Body() body) {
        return body
    }
    //variante
    //@Post()
    //createTuit(@Body('message') message: string){
    //    return ' Your tuit was: ${message}'
    //}

    //PARA CAMBIAR EL ESTADO QUE NEST TRAE POR DEFAULD
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    noContent(@Body('message') message: string) {
        return `Your trui`
    }

    
    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body() tuit): string {
        return `Tuit ${id} has been update`
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string): string {
        return `Tuit ${id} has been deleted`
    }



}
