"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatRoom_1 = require("./ChatRoom");
const User_1 = require("./User");
const chatRoom = new ChatRoom_1.ChatRoom();
const john = new User_1.User("John", chatRoom);
const jane = new User_1.User("Jane", chatRoom);
john.sendMessage("Hi there!");
jane.sendMessage("Hello, John!");
