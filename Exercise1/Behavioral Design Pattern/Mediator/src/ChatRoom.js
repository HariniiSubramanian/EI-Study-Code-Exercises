"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
class ChatRoom {
    showMessage(user, message) {
        const time = new Date().toLocaleTimeString();
        const sender = user.getName();
        console.log(`${time} [${sender}]: ${message}`);
    }
}
exports.ChatRoom = ChatRoom;
