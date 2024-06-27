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
const openai_1 = __importDefault(require("openai"));
class LLMController {
    constructor(gptPrompt, model) {
        this.OPENAI_API_KEY = process.env.OPENAI_KEY;
        this.openai = new openai_1.default({
            apiKey: this.OPENAI_API_KEY,
        });
        this.model = model;
        this.systemPrompt = {
            role: "system",
            content: gptPrompt,
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
        return __awaiter(this, void 0, void 0, function* () {
            const inputData = {
                role: "user",
                content: userInput,
            };
            this.messages.push(inputData);
        });
    }
    gptResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.openai.chat.completions.create({
                    model: this.model,
                    messages: this.messages,
                    max_tokens: 100,
                    temperature: 0.7,
                    frequency_penalty: 0.5,
                    presence_penalty: 0.0,
                });
                const assistantResponse = response.choices[0].message;
                console.log(assistantResponse);
                this.messages.push(assistantResponse);
                const stringResponse = assistantResponse.content;
                return stringResponse;
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(`Error recieving response from GPT: ${error.message}`);
                    return `Error recieving response from GPT: ${error.message}`;
                }
            }
        });
    }
}
exports.default = LLMController;
