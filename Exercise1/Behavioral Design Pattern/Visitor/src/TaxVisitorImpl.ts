import { TaxVisitor } from "./TaxVisitor";
import { Book } from "./Book";
import { Electronics } from "./Electronics";

class TaxVisitorImpl implements TaxVisitor {
    public visitBook(book: Book): void {
        const tax = book.getPrice() * 0.05; // 5% tax for books
        console.log(`Book Price: $${book.getPrice()}, Tax: $${tax}`);
    }

    public visitElectronics(electronics: Electronics): void {
        const tax = electronics.getPrice() * 0.20; // 20% tax for electronics
        console.log(`Electronics Price: $${electronics.getPrice()}, Tax: $${tax}`);
    }
}

export { TaxVisitorImpl };
