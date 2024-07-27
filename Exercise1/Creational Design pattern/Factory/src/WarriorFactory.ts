import { CharacterFactory } from './CharacterFactory';
import { Character } from './Character';
import { Warrior } from './Warrior';

// Concrete Creator
export class WarriorFactory extends CharacterFactory {
  createCharacter(name: string): Character {
    return new Warrior(name);
  }
}
