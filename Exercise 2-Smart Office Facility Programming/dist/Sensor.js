"use strict";
// Sensor.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccupancySensor = void 0;
class OccupancySensor {
    constructor(room) {
        this.room = room;
    }
    detectOccupancyChange() {
        if (this.room.getOccupancy() >= 2) {
            this.room.turnOnACAndLights();
        }
        else {
            this.room.turnOffACAndLights();
        }
    }
}
exports.OccupancySensor = OccupancySensor;
