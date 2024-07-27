import { TaxVisitor } from "./TaxVisitor";

interface Product {
    accept(visitor: TaxVisitor): void;
}

export { Product };
