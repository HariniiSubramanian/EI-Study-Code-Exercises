import { Character } from './Character';

// Concrete Product
export class Mage extends Character {
  attack() {
    console.log(`${this.name} casts a fireball!`);
  }
}
