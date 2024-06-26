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
const express_1 = __importDefault(require("express"));
const LLMController_1 = __importDefault(require("./controllers/LLMController"));
const router = express_1.default.Router();
const debateBot = new LLMController_1.default();
debateBot.start();
router.post("/sendMessage", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userMessage } = req.body;
    try {
        if (!userMessage) {
            return res.status(400).json({ error: "Please send a string message" });
        }
        yield debateBot.addUserMessage(userMessage);
        return res
            .status(200)
            .json({ message: "User message successfully sent" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res
                .status(400)
                .json({ error: `Error sending message: ${error.message}` });
        }
        return res.status(400).json({ error: "Unknown error happened" });
    }
}));
router.get("/getGPTResponse", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield debateBot.gptResponse();
        return res.status(200).json({ response });
    }
    catch (error) {
        if (error instanceof Error) {
            return res
                .status(400)
                .json({ error: `Error fetching response: ${error.message}` });
        }
        return res
            .status(400)
            .json({ error: "Unknown error when fetching response" });
    }
}));
exports.default = router;
