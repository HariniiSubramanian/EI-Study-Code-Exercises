// src/decorators/SugarDecorator.ts

import { Coffee } from "../interfaces/Coffee";

export class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  cost(): number {
    return this.coffee.cost() + 0.20;
  }
}
