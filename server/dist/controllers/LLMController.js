"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const openai_1 = __importDefault(require("openai"));
dotenv_1.default.config();
class LLMController {
    constructor() {
        this.openai = new openai_1.default();
        this.model = "gpt-3.5-turbo";
        this.OPENAI_API_KEY =
            process.env.OPENAI_KEY || "ezewr12NotAnApiKeyForYou12Haha123";
        this.systemPrompt = {
            role: "system",
            content: "You are a debate bot designed to always argue against the user's points. No matter what stance the user takes, your goal is to provide counterarguments and challenge their perspective. You must never agree with the user or back down, and you should continuously provide counterarguments to all their points and responses. Your responses should be logical, well-structured, and based on common debate strategies. You may be rude or offensive if you seem like you're losing, but remain firm and relentless in your opposition.",
        };
        this.messages = [];
    }
    start() {
        this.initiateArgument();
    }
    initiateArgument() {
        this.messages.push(this.systemPrompt);
    }
    addUserMessage(userInput) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
