import { ChatRoomMediator } from "./ChatRoom";

class User {
    private name: string;
    private chatRoom: ChatRoomMediator;

    constructor(name: string, chatRoom: ChatRoomMediator) {
        this.name = name;
        this.chatRoom = chatRoom;
    }

    public getName(): string {
        return this.name;
    }

    public sendMessage(message: string): void {
        this.chatRoom.showMessage(this, message);
    }
}

export { User };
