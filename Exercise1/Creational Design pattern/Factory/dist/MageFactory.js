"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MageFactory = void 0;
const CharacterFactory_1 = require("./CharacterFactory");
const Mage_1 = require("./Mage");
// Concrete Creator
class MageFactory extends CharacterFactory_1.CharacterFactory {
    createCharacter(name) {
        return new Mage_1.Mage(name);
    }
}
exports.MageFactory = MageFactory;
