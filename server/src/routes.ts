import express, { type Request, type Response } from "express";
import { sendUserMessage, recieveBotResponse } from "./bots/debateBot";

const router = express.Router();

router.post("/chat", sendUserMessage);

router.get("/chat", recieveBotResponse);

export default router;
