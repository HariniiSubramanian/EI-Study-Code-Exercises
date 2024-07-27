import { Book } from "./Book";
import { Electronics } from "./Electronics";
import { TaxVisitorImpl } from "./TaxVisitorImpl";

const book = new Book(50);
const electronics = new Electronics(200);

const taxVisitor = new TaxVisitorImpl();

book.accept(taxVisitor);
electronics.accept(taxVisitor);
