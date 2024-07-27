"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcherFactory = void 0;
const CharacterFactory_1 = require("./CharacterFactory");
const Archer_1 = require("./Archer");
// Concrete Creator
class ArcherFactory extends CharacterFactory_1.CharacterFactory {
    createCharacter(name) {
        return new Archer_1.Archer(name);
    }
}
exports.ArcherFactory = ArcherFactory;
