import { WarriorFactory } from './WarriorFactory';
import { MageFactory } from './MageFactory';
import { ArcherFactory } from './ArcherFactory';

// Usage
const warriorFactory = new WarriorFactory();
const mageFactory = new MageFactory();
const archerFactory = new ArcherFactory();

const warrior = warriorFactory.createCharacter("Conan");
const mage = mageFactory.createCharacter("Merlin");
const archer = archerFactory.createCharacter("Robin");

warrior.attack(); // Conan swings a sword!
mage.attack();    // Merlin casts a fireball!
archer.attack();  // Robin shoots an arrow!
