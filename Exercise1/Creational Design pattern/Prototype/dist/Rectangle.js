"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
// Concrete Prototype
class Rectangle extends Shape_1.Shape {
    constructor(id, width, height) {
        super(id, 'Rectangle');
        this.width = width;
        this.height = height;
    }
    clone() {
        return new Rectangle(this.id, this.width, this.height);
    }
    draw() {
        console.log(`Drawing a Rectangle with width ${this.width} and height ${this.height}`);
    }
}
exports.Rectangle = Rectangle;
