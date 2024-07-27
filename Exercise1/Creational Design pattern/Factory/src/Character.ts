// Abstract Product
export abstract class Character {
    constructor(public name: string) {}
    abstract attack(): void;
  }
  