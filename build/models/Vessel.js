"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var VesselSchema = new mongoose_1.default.Schema({
    reference: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    mmsi: { type: String, required: false },
});
exports.default = mongoose_1.default.model('Vessel', VesselSchema);
