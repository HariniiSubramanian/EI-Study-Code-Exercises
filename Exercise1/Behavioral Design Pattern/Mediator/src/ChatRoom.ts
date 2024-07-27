import { User } from "./User";

interface ChatRoomMediator {
    showMessage(user: User, message: string): void;
}

class ChatRoom implements ChatRoomMediator {
    public showMessage(user: User, message: string): void {
        const time = new Date().toLocaleTimeString();
        const sender = user.getName();
        console.log(`${time} [${sender}]: ${message}`);
    }
}

export { ChatRoom, ChatRoomMediator };
