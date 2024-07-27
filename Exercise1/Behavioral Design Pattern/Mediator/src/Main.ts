import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

const chatRoom = new ChatRoom();

const john = new User("John", chatRoom);
const jane = new User("Jane", chatRoom);

john.sendMessage("Hi there!");
jane.sendMessage("Hello, John!");
