"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electronics = void 0;
class Electronics {
    constructor(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    accept(visitor) {
        visitor.visitElectronics(this);
    }
}
exports.Electronics = Electronics;
