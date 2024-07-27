import { Product } from "./Product";
import { TaxVisitor } from "./TaxVisitor";

class Book implements Product {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public accept(visitor: TaxVisitor): void {
        visitor.visitBook(this);
    }
}

export { Book };
