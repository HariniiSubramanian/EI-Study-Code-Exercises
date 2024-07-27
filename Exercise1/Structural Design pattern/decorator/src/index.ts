// src/index.ts

import { Coffee } from "./interfaces/Coffee";
import { Espresso } from "./coffees/Espresso";
import { HouseBlend } from "./coffees/HouseBlend";
import { MilkDecorator } from "./decorators/MilkDecorator";
import { SugarDecorator } from "./decorators/SugarDecorator";
import { WhippedCreamDecorator } from "./decorators/WhippedCreamDecorator";

function main() {
  // Order an Espresso with Milk and Sugar
  let coffee: Coffee = new Espresso();
  coffee = new MilkDecorator(coffee);
  coffee = new SugarDecorator(coffee);

  console.log(`Order 1: ${coffee.getDescription()} - $${coffee.cost().toFixed(2)}`);

  // Order a House Blend with Milk, Sugar, and Whipped Cream
  let coffee2: Coffee = new HouseBlend();
  coffee2 = new MilkDecorator(coffee2);
  coffee2 = new SugarDecorator(coffee2);
  coffee2 = new WhippedCreamDecorator(coffee2);

  console.log(`Order 2: ${coffee2.getDescription()} - $${coffee2.cost().toFixed(2)}`);
}

main();
