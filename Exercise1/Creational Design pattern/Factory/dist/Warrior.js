"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
// Concrete Product
class Warrior extends Character_1.Character {
    attack() {
        console.log(`${this.name} swings a sword!`);
    }
}
exports.Warrior = Warrior;
