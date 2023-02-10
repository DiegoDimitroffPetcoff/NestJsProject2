import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
    private tuits: Tuit[] = [
        {
            id: '1',
            message: "Hello world from Nest.Js"
        }
    ]

    //Crud
    getTuits(): Tuit[] {
        return this.tuits;
    }
    getTuit(id: string): Tuit {
        return this.tuits.find((itme) => itme.id === id);
    }

    //Crud
    creatTuit(message: string) {
        this.tuits.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            message,
        })
    }

    //crUd
    updateTuit(id: string, message: any): void {
        const tuit: Tuit = this.getTuit(id);
        tuit.message = message;

    }

    //cRud
    removeTuit(id: string) {
        const index = this.tuits.findIndex((tuit) => tuit.id === id);
        if (index >= 0) {
            this.tuits.splice(index, 1);
        }
    }







    example(): string {
        return "example";
    }


}
