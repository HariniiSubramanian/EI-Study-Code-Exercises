"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeRegistry = void 0;
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// Prototype Registry
class ShapeRegistry {
    constructor() {
        this.shapes = {};
        // Initializing with some shapes
        this.shapes['circle1'] = new Circle_1.Circle('1', 10);
        this.shapes['rectangle1'] = new Rectangle_1.Rectangle('2', 20, 30);
    }
    getShape(id) {
        const shape = this.shapes[id];
        return shape ? shape.clone() : null;
    }
    addShape(id, shape) {
        this.shapes[id] = shape;
    }
}
exports.ShapeRegistry = ShapeRegistry;
