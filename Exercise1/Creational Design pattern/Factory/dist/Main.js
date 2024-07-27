"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WarriorFactory_1 = require("./WarriorFactory");
const MageFactory_1 = require("./MageFactory");
const ArcherFactory_1 = require("./ArcherFactory");
// Usage
const warriorFactory = new WarriorFactory_1.WarriorFactory();
const mageFactory = new MageFactory_1.MageFactory();
const archerFactory = new ArcherFactory_1.ArcherFactory();
const warrior = warriorFactory.createCharacter("Conan");
const mage = mageFactory.createCharacter("Merlin");
const archer = archerFactory.createCharacter("Robin");
warrior.attack(); // Conan swings a sword!
mage.attack(); // Merlin casts a fireball!
archer.attack(); // Robin shoots an arrow!
