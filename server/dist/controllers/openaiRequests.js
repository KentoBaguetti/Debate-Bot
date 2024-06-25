"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const openai_1 = __importDefault(require("openai"));
dotenv_1.default.config();
class LMController {
    constructor() {
        this.openai = new openai_1.default();
        this.model = "gpt-3.5-turbo";
        this.OPENAI_API_KEY =
            process.env.OPENAI_KEY || "ezewr12NotAnApiKeyForYou12Haha123";
    }
}
