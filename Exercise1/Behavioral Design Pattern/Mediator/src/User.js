"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }
    getName() {
        return this.name;
    }
    sendMessage(message) {
        this.chatRoom.showMessage(this, message);
    }
}
exports.User = User;
