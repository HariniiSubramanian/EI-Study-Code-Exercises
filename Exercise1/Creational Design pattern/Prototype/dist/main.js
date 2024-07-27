"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShapeRegistry_1 = require("./ShapeRegistry");
const Circle_1 = require("./Circle");
// Usage
const shapeRegistry = new ShapeRegistry_1.ShapeRegistry();
const circle1 = shapeRegistry.getShape('circle1');
if (circle1) {
    circle1.draw(); // Drawing a Circle with radius 10
}
const rectangle1 = shapeRegistry.getShape('rectangle1');
if (rectangle1) {
    rectangle1.draw(); // Drawing a Rectangle with width 20 and height 30
}
// Adding a new shape to the registry
shapeRegistry.addShape('circle2', new Circle_1.Circle('3', 15));
const circle2 = shapeRegistry.getShape('circle2');
if (circle2) {
    circle2.draw(); // Drawing a Circle with radius 15
}
