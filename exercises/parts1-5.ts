import {SpaceLocation} from './SpaceLocation';

class Spacecraft {

    spacecraftName: string;
    milesPerKilometer: number = 0.621;
    speedMph: number;
 
    constructor(spacecraftName: string, speedMph: number) {
       this.spacecraftName = spacecraftName;
       this.speedMph = speedMph;
    }
 
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hours: number = milesAway / this.speedMph;
       return hours / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.spacecraftName} would take ${this.getDaysToLocation(location.kilometersAway)} days to reach ${location.name}.`);
    }
}


let spacecraft = new Spacecraft("Determination", 17500)
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
// let milesToMars: number = kilometersToMars * spacecraft.milesPerKilometer;
// let hoursToMars: number = milesToMars / spacecraft.speedMph;
// let daysToMars: number = hoursToMars / 24;

spacecraft.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars));

spacecraft.printDaysToLocation(new SpaceLocation("the Moon", kilometersToTheMoon));