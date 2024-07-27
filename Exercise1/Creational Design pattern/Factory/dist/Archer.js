"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const Character_1 = require("./Character");
// Concrete Product
class Archer extends Character_1.Character {
    attack() {
        console.log(`${this.name} shoots an arrow!`);
    }
}
exports.Archer = Archer;
