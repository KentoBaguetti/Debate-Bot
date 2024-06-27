"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const debateBot_1 = require("./bots/debateBot");
const router = express_1.default.Router();
router.post("/chat", debateBot_1.sendUserMessage);
router.get("/chat", debateBot_1.recieveBotResponse);
exports.default = router;
