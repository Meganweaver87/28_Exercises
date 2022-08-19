"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
var Spacecraft = /** @class */ (function () {
    function Spacecraft(spacecraftName, speedMph) {
        this.milesPerKilometer = 0.621;
        this.spacecraftName = spacecraftName;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.spacecraftName, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to reach ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spacecraft = new Spacecraft("Determination", 17500);
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesToMars: number = kilometersToMars * spacecraft.milesPerKilometer;
// let hoursToMars: number = milesToMars / spacecraft.speedMph;
// let daysToMars: number = hoursToMars / 24;
spacecraft.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spacecraft.printDaysToLocation(new SpaceLocation_1.SpaceLocation("the Moon", kilometersToTheMoon));
