import { Character } from './Character';

// Concrete Product
export class Archer extends Character {
  attack() {
    console.log(`${this.name} shoots an arrow!`);
  }
}
