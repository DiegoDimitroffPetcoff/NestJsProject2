/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { findIndex } from 'rxjs';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.Js',
    },
  ];

  //[Crud]
  getTuits(): Tuit[] {
    return this.tuits;
  }
  getTuit(id: string): Tuit {
    return this.tuits.find((itme) => itme.id === id);
  }

  //[Crud]
  creatTuit(message: string) {
    this.tuits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
    const data: object = {
      newTuit: this.tuits[this.tuits.length - 1],
      allTuits: this.tuits,
    };
    return data;
  }

  //[crUd] Update
  updateTuit(id: string, message: any): object {
    const tuit: Tuit = this.getTuit(id);
    tuit.message = message;
    console.log(tuit);
    return tuit;
  }

  //[cRud] Remove
  removeTuit(id: string): object {
    const removed = this.tuits.find((itme) => itme.id === id);
    const index = this.tuits.findIndex((tuit) => tuit.id === id);
    if (index >= 0) {
      this.tuits.splice(index, 1);
    }
    return removed;
  }

  example(): string {
    return 'example';
  }
}
