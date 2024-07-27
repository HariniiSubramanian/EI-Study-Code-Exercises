"use strict";
// src/decorators/WhippedCreamDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = void 0;
class WhippedCreamDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, Whipped Cream`;
    }
    cost() {
        return this.coffee.cost() + 0.70;
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
