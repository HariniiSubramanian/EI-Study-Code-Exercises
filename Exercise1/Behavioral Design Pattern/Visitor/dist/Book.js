"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    accept(visitor) {
        visitor.visitBook(this);
    }
}
exports.Book = Book;
