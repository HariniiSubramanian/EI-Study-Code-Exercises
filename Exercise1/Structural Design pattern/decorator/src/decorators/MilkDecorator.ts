// src/decorators/MilkDecorator.ts

import { Coffee } from "../interfaces/Coffee";

export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getDescription(): string {
    return `${this.coffee.getDescription()}, Milk`;
  }

  cost(): number {
    return this.coffee.cost() + 0.50;
  }
}
