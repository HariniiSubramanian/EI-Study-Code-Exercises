"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarriorFactory = void 0;
const CharacterFactory_1 = require("./CharacterFactory");
const Warrior_1 = require("./Warrior");
// Concrete Creator
class WarriorFactory extends CharacterFactory_1.CharacterFactory {
    createCharacter(name) {
        return new Warrior_1.Warrior(name);
    }
}
exports.WarriorFactory = WarriorFactory;
