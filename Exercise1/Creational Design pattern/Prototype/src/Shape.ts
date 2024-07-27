// Abstract Prototype
export abstract class Shape {
    constructor(public id: string, public type: string) {}
  
    abstract clone(): Shape;
    abstract draw(): void; 
  }
  