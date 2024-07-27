"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Espresso_1 = require("./coffees/Espresso");
const HouseBlend_1 = require("./coffees/HouseBlend");
const MilkDecorator_1 = require("./decorators/MilkDecorator");
const SugarDecorator_1 = require("./decorators/SugarDecorator");
const WhippedCreamDecorator_1 = require("./decorators/WhippedCreamDecorator");
function main() {
    // Order an Espresso with Milk and Sugar
    let coffee = new Espresso_1.Espresso();
    coffee = new MilkDecorator_1.MilkDecorator(coffee);
    coffee = new SugarDecorator_1.SugarDecorator(coffee);
    console.log(`Order 1: ${coffee.getDescription()} - $${coffee.cost().toFixed(2)}`);
    // Order a House Blend with Milk, Sugar, and Whipped Cream
    let coffee2 = new HouseBlend_1.HouseBlend();
    coffee2 = new MilkDecorator_1.MilkDecorator(coffee2);
    coffee2 = new SugarDecorator_1.SugarDecorator(coffee2);
    coffee2 = new WhippedCreamDecorator_1.WhippedCreamDecorator(coffee2);
    console.log(`Order 2: ${coffee2.getDescription()} - $${coffee2.cost().toFixed(2)}`);
}
main();
