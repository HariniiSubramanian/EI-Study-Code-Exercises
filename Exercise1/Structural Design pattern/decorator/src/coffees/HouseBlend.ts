// src/coffees/HouseBlend.ts

import { Coffee } from "../interfaces/Coffee";

export class HouseBlend implements Coffee {
  getDescription(): string {
    return "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}
