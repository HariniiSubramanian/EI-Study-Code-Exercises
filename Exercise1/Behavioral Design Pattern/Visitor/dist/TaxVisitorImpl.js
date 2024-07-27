"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxVisitorImpl = void 0;
class TaxVisitorImpl {
    visitBook(book) {
        const tax = book.getPrice() * 0.05; // 5% tax for books
        console.log(`Book Price: $${book.getPrice()}, Tax: $${tax}`);
    }
    visitElectronics(electronics) {
        const tax = electronics.getPrice() * 0.20; // 20% tax for electronics
        console.log(`Electronics Price: $${electronics.getPrice()}, Tax: $${tax}`);
    }
}
exports.TaxVisitorImpl = TaxVisitorImpl;
