import { CharacterFactory } from './CharacterFactory';
import { Character } from './Character';
import { Mage } from './Mage';

// Concrete Creator
export class MageFactory extends CharacterFactory {
  createCharacter(name: string): Character {
    return new Mage(name);
  }
}
