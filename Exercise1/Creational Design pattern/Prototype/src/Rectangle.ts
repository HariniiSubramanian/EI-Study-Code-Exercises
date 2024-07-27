import { Shape } from './Shape';

// Concrete Prototype
export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(id: string, width: number, height: number) {
    super(id, 'Rectangle');
    this.width = width;
    this.height = height;
  }

  clone(): Rectangle {
    return new Rectangle(this.id, this.width, this.height);
  }

  draw() {
    console.log(`Drawing a Rectangle with width ${this.width} and height ${this.height}`);
  }
}
