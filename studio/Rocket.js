"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //a
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all items using each item's massKg property
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    //b
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var cargoMassTotal = this.sumMass(this.cargoItems);
        var astronautsMassTotal = this.sumMass(this.astronauts);
        var massTotal = cargoMassTotal + astronautsMassTotal;
        return massTotal;
        //return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    //c
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    //d
    Rocket.prototype.addCargo = function (cargo) {
        var itCanAdd = this.canAdd(cargo);
        //Uses this.canAdd() to see if another item can be added
        if (itCanAdd) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    //e
    Rocket.prototype.addAstronaut = function (astronaut) {
        //Uses this.canAdd() to see if another astronaut can be added
        var itCanAdd = this.canAdd(astronaut);
        if (itCanAdd) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
