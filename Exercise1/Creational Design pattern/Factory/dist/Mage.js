"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
// Concrete Product
class Mage extends Character_1.Character {
    attack() {
        console.log(`${this.name} casts a fireball!`);
    }
}
exports.Mage = Mage;
