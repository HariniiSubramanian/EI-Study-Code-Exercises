import { Shape } from './Shape';

// Concrete Prototype
export class Circle extends Shape {
  public radius: number;

  constructor(id: string, radius: number) {
    super(id, 'Circle');
    this.radius = radius;
  }

  clone(): Circle {
    return new Circle(this.id, this.radius);
  }

  draw() {
    console.log(`Drawing a Circle with radius ${this.radius}`);
  }
}
