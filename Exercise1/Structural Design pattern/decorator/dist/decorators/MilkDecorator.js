"use strict";
// src/decorators/MilkDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, Milk`;
    }
    cost() {
        return this.coffee.cost() + 0.50;
    }
}
exports.MilkDecorator = MilkDecorator;
