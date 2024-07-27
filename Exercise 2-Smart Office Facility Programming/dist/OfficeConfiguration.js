"use strict";
// OfficeConfiguration.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeConfiguration = void 0;
const Room_1 = require("./Room");
class OfficeConfiguration {
    constructor() {
        this.rooms = new Map();
    }
    static getInstance() {
        if (!OfficeConfiguration.instance) {
            OfficeConfiguration.instance = new OfficeConfiguration();
        }
        return OfficeConfiguration.instance;
    }
    configureRooms(count) {
        for (let i = 1; i <= count; i++) {
            this.rooms.set(i, new Room_1.Room(i));
        }
        console.log(`Office configured with ${count} meeting rooms.`);
    }
    getRoom(id) {
        return this.rooms.get(id);
    }
    getRooms() {
        return this.rooms;
    }
    setRoomCapacity(id, capacity) {
        const room = this.getRoom(id);
        if (room) {
            room.setMaxCapacity(capacity);
        }
        else {
            throw new Error(`Room ${id} does not exist.`);
        }
    }
}
exports.OfficeConfiguration = OfficeConfiguration;
