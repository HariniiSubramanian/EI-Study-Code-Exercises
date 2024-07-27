import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

// Prototype Registry
export class ShapeRegistry {
  private shapes: { [key: string]: Shape } = {};

  constructor() {
    // Initializing with some shapes
    this.shapes['circle1'] = new Circle('1', 10);
    this.shapes['rectangle1'] = new Rectangle('2', 20, 30);
  }

  getShape(id: string): Shape | null {
    const shape = this.shapes[id];
    return shape ? shape.clone() : null;
  }

  addShape(id: string, shape: Shape) {
    this.shapes[id] = shape;
  }
}
