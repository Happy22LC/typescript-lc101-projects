import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload }  from './Payload';

export class Rocket {
    // properties and methods
    //28.8.3.3. Rocket Class
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string,totalCapacityKg: number ) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //a
    sumMass(items: Payload[]): number{
        //Returns the sum of all items using each item's massKg property
        let myTotalMass = 0;
        for(let i = 0; i < items.length; i++)
        {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;

    }

    //b
    currentMassKg(): number {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let cargoMassTotal = this.sumMass(this.cargoItems);
        let astronautsMassTotal = this.sumMass(this.astronauts);
        let massTotal = cargoMassTotal + astronautsMassTotal;
        return massTotal;

        //return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    //c
    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }

    //d
    addCargo(cargo: Cargo): boolean{
        let itCanAdd = this.canAdd(cargo);
        //Uses this.canAdd() to see if another item can be added
        if(itCanAdd){
            this.cargoItems.push(cargo)
            return true;
        }else{
            return false;
        }
    }
    //e
    addAstronaut(astronaut: Astronaut): boolean{
        //Uses this.canAdd() to see if another astronaut can be added
        let itCanAdd = this.canAdd(astronaut);
        if(itCanAdd){
            this.astronauts.push(astronaut)
            return true;
        }else{
            return false;
        }

    }

 }