import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

//EL CONTROLADOR// lo que esta entre parentesis sera la ruta mapeada

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;
    return this.tuitService.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id: string): Tuit {
    return this.tuitService.getTuit(id);
  }

  @Post()
  createTuit(@Body('message') message: string) {
    return this.tuitService.creatTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): object {
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string) {
    return this.tuitService.removeTuit(id);
  }
}
