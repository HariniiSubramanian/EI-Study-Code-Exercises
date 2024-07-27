import { CharacterFactory } from './CharacterFactory';
import { Character } from './Character';
import { Archer } from './Archer';

// Concrete Creator
export class ArcherFactory extends CharacterFactory {
  createCharacter(name: string): Character {
    return new Archer(name);
  }
}
