import { Character } from './Character';

// Creator
export abstract class CharacterFactory {
  abstract createCharacter(name: string): Character;
}
