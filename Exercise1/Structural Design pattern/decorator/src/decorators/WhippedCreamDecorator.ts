// src/decorators/WhippedCreamDecorator.ts

import { Coffee } from "../interfaces/Coffee";

export class WhippedCreamDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getDescription(): string {
    return `${this.coffee.getDescription()}, Whipped Cream`;
  }

  cost(): number {
    return this.coffee.cost() + 0.70;
  }
}
