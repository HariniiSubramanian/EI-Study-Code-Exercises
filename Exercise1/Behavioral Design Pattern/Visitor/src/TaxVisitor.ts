import { Book } from "./Book";
import { Electronics } from "./Electronics";

interface TaxVisitor {
    visitBook(book: Book): void;
    visitElectronics(electronics: Electronics): void;
}

export { TaxVisitor };
