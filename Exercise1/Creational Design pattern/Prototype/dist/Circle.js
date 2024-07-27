"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
// Concrete Prototype
class Circle extends Shape_1.Shape {
    constructor(id, radius) {
        super(id, 'Circle');
        this.radius = radius;
    }
    clone() {
        return new Circle(this.id, this.radius);
    }
    draw() {
        console.log(`Drawing a Circle with radius ${this.radius}`);
    }
}
exports.Circle = Circle;
