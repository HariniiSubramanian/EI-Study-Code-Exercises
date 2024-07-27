import { Character } from './Character';

// Concrete Product
export class Warrior extends Character {
  attack() {
    console.log(`${this.name} swings a sword!`);
  }
}
