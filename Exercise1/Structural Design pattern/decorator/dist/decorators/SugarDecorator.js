"use strict";
// src/decorators/SugarDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = void 0;
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, Sugar`;
    }
    cost() {
        return this.coffee.cost() + 0.20;
    }
}
exports.SugarDecorator = SugarDecorator;
