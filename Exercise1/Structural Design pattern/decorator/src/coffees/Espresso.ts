// src/coffees/Espresso.ts

import { Coffee } from "../interfaces/Coffee";

export class Espresso implements Coffee {
  getDescription(): string {
    return "Espresso";
  }

  cost(): number {
    return 1.99;
  }
}
