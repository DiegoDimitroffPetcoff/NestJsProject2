import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';


//EL CONTROLADOR// lo que esta entre parentesis sera la ruta mapeada

@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService) {

    }

   @Get()
   getTuits(@Query() filterQuery): Tuit[] { 
    const { searchTerm, orderBy} = filterQuery;
    return this.tuitService.getTuits()
   }

   @Get(':id')
   getTuit(@Param('id') id: string): Tuit{
    return this.tuitService.getTuit(id)
   }

   @Post()
   createTuit(@Body('message') message: string): void {
    return this.tuitService.creatTuit(message);
   }

   @Patch(':id')
   updateTuit(@Param('id') id: string, @Body('message') tuit): void{
    return this.tuitService.updateTuit(id,tuit);
   }

   @Delete(':id')
   removeTuit(@Param('id') id: string): void{
    return this.tuitService.removeTuit(id);
   }


}
